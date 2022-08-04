import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-paymentaging',
  templateUrl: './paymentaging.component.html',
  styleUrls: ['./paymentaging.component.css']
})
export class PaymentagingComponent implements OnInit {
  delivery:any;
  uname:any;
  pipe = new DatePipe('en-US')
  docnumlist: number[]=[];
  docnumlist1: number[]=[];
  roundoff: string[]=[];
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.uname=sessionStorage.getItem("uname");
    this.http.post('http://localhost:4000/paymentage',{uname:this.uname}).subscribe((data:any)=>{
      console.log(data);
    this.delivery= data['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_CUST_PAYMENTAGE_BK.Response']['IT_PAYMENT_LIST']['item'].slice(1);
    console.log(this.delivery);
    
    var i;
    for(i=0; i <= this.delivery.length; i++){
      var lendzero = this.delivery[i].DOC_NO._text;
      var lendzero1 = this.delivery[i].FIS_PERIOD._text;
      var round_off = parseInt(this.delivery[i].AMOUNT._text,10);

      const withoutLeading0 = parseInt(lendzero, 10);
      const withoutLeading1 = parseInt(lendzero1, 10);
      const temp_roundoff = round_off.toFixed(2)

      // console.log(withoutLeading0);
      
      this.docnumlist.push(withoutLeading0);
      this.docnumlist1.push(withoutLeading1);
      this.roundoff.push(temp_roundoff);
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
