import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-listofdelivery',
  templateUrl: './listofdelivery.component.html',
  styleUrls: ['./listofdelivery.component.css']
})
export class ListofdeliveryComponent implements OnInit {
  delivery:any;
  uname:any;datefortamt: string[]= [];
  docnumlist: number[] = [];
  altdata="-";
  pipe = new DatePipe('en-US')
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.uname=sessionStorage.getItem("uname");
    this.http.post('http://localhost:4000/listofdel',{uname:this.uname}).subscribe((data:any)=>{
      console.log(data);
    this.delivery= data['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_CUST_DELIVERY_BK.Response']['IT_DELIVERY_LIST']['item'].slice(1);
    console.log(this.delivery);
    
    var i;
    for(i=0; i <= this.delivery.length; i++){
      var lendzero = this.delivery[i].VBELN._text;
      const temp_date = this.pipe.transform(this.delivery[i].AEDAT._text, 'MM/dd/yyyy')
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
