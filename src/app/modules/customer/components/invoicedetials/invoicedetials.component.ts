import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-invoicedetials',
  templateUrl: './invoicedetials.component.html',
  styleUrls: ['./invoicedetials.component.css']
})
export class InvoicedetialsComponent implements OnInit {
  invoice:any;
  uname:any;
  datefortamt: string[]= [];
  datefortamt1: string[]= [];
  datefortamt2: string[]= [];
docnumlist: number[] = [];
docnumlist1: number[] = [];
pipe = new DatePipe('en-US')
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.uname=sessionStorage.getItem("uname");
    this.http.post('http://localhost:4000/invoice',{uname:this.uname}).subscribe((data:any)=>{
      console.log(data);
    this.invoice= data['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_CUST_INVOICELIST_BK.Response']['IT_INVOICE_LIST']['item'];
    console.log(this.invoice);
    
    var i;
    for(i=0; i <= this.invoice.length; i++){
      var lendzero = this.invoice[i].VBELN._text;
      var lendzero1 = this.invoice[i].EXNUM._text;
      const temp_date = this.pipe.transform(this.invoice[i].KURRF_DAT._text, 'MM/dd/yyyy')
      const temp_date1 = this.pipe.transform(this.invoice[i].KURRF_DAT._text, 'MM/dd/yyyy')
      
      const withoutLeading0 = parseInt(lendzero, 10);
      const withoutLeading1 = parseInt(lendzero1, 10);
      console.log(withoutLeading0);
      if(temp_date && temp_date1 != null){
        this.datefortamt.push(temp_date);
        this.datefortamt1.push(temp_date);
        
        console.log(temp_date)
      }
      this.docnumlist.push(withoutLeading0);
      this.docnumlist1.push(withoutLeading1);
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

