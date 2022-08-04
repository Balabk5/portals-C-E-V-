import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Http2ServerRequest } from 'http2';

@Component({
  selector: 'app-leavereq',
  templateUrl: './leavereq.component.html',
  styleUrls: ['./leavereq.component.css']
})
export class LeavereqComponent implements OnInit {
uname:any;
leave:any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.uname=sessionStorage.getItem("uname");
    this.http.post('http://localhost:4000/leaverequest',{uname:this.uname}).subscribe((data:any)=>{
      console.log(data);
    this.leave= data['SOAP:Envelope']['SOAP:Body']['ns0:ZEMP_LEAVE_FM_KRR.Response']['IT_LEAVE_DATA']['item'];
    console.log(this.leave);

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
      td = tr[i].getElementsByTagName("td")[6];
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
