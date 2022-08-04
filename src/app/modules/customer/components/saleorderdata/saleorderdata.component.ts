import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-saleorderdata',
  templateUrl: './saleorderdata.component.html',
  styleUrls: ['./saleorderdata.component.css']
})
export class SaleorderdataComponent implements OnInit {
  saleorder:any;
  uname:any;
  datefortamt: string[]= [];
docnumlist: number[] = [];
  pipe = new DatePipe('en-US')
  constructor(private http:HttpClient, private location: Location) { }

  ngOnInit(): void {
    this.uname=sessionStorage.getItem("uname");
    this.http.post('http://localhost:4000/saleorder',{uname:this.uname}).subscribe((data:any)=>{
      console.log(data);
    this.saleorder= data['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_CUST_SALEORDER_BK.Response']['IT_SALES_ORDERS']['item'];
    console.log(this.saleorder);
    
    var i;
    for(i=0; i <= this.saleorder.length; i++){
      var lendzero = this.saleorder[i].SD_DOC._text;
      const temp_date = this.pipe.transform(this.saleorder[i].REQ_DATE._text, 'MM/dd/yyyy')
      const withoutLeading0 = parseInt(lendzero, 10);
      // console.log(withoutLeading0);
      if(temp_date != null){
        this.datefortamt.push(temp_date);
        console.log(temp_date)
      }
      this.docnumlist.push(withoutLeading0);
      console.log(this.docnumlist[i]);
    }

    
  })
}
public navback(){
  this.location.back();
}

public myFunction() {
  var input, filter, table, tr, td, i, txtValue;
  // input = document.getElementById("myInput");
   input = (<HTMLInputElement>document.getElementById("myInput"));
   
   filter = input.value.toUpperCase();    
  table = document.getElementById("myTable");
  if(table != null){
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }
  
  
}

}
