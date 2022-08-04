import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-recforqtn',
  templateUrl: './recforqtn.component.html',
  styleUrls: ['./recforqtn.component.css']
})
export class RecforqtnComponent implements OnInit {
  uname:any;
  req:any;
  docnumlist: number[]=[];
  datefortamt: string[]=[];
  pipe = new DatePipe('en-US')
  obj:any;
  evt:any;
  msg = "-"
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.uname=sessionStorage.getItem("uname");
    this.http.post('http://localhost:4000/Reqforpurchase',{uname:this.uname}).subscribe((data:any)=>{
      console.log(data);
    this.req= data['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_VEN_REQUEST_BK.Response']['IT_RFQ_LIST']['item'].slice(1);
    console.log(this.req);
    var i;
  for(i=0; i <= this.req.length; i++){
    
    var lendzero = this.req[i].CUSTOMER._text;
    const temp_date = this.pipe.transform(this.req[i].CREATED_ON._text, 'MM/dd/yyyy')
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
