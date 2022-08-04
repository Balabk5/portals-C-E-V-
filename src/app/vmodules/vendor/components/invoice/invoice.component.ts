import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  uname:any;
  invoice:any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.uname=sessionStorage.getItem("uname");
    this.http.post('http://localhost:4000/vinvoice',{uname:this.uname}).subscribe((data:any)=>{
      console.log(data);
    this.invoice= data['SOAP:Envelope']['SOAP:Body']['ns0:ZVEN_INVOICE_FM_KRR.Response']['INVOICE_ITEM']['item'];
    console.log(this.invoice);
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
