import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-cdmemo',
  templateUrl: './cdmemo.component.html',
  styleUrls: ['./cdmemo.component.css']
})
export class CdmemoComponent implements OnInit {
  uname:any;
  cdmemo:any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.uname=sessionStorage.getItem("uname");
    this.http.post('http://localhost:4000/vcredit',{uname:this.uname}).subscribe((data:any)=>{
      console.log(data);
    this.cdmemo= data['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_VEN_CREDIT_BK.Response']['IT_CREDIT']['item'].slice(1);
    console.log(this.cdmemo);
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
