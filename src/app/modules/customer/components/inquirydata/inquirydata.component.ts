import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
declare const require: any;
require('jspdf-autotable');
const { jsPDF } = require("jspdf");
import { AuthenticationService } from 'src/app/service/authentication/authentication.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-inquirydata',
  templateUrl: './inquirydata.component.html',
  styleUrls: ['./inquirydata.component.css']
})
export class InquirydataComponent implements OnInit {

  inquiry:any;
uname:any;
obj:any;
evt:any;
filterTerm!: string;
ERNAM:any;
docnum:any;
msg="No Data";
value:any;
datefortamt: string[]= [];
docnumlist: number[] = [];
pipe = new DatePipe('en-US')
constructor(public authenticationService: AuthenticationService,private router:Router,private http:HttpClient) {​​​​​ }​​​​​

logout() {​​​​​
this.authenticationService.logout();
// sessionStorage.clear();
  }​​​​​
  ngOnInit(): void {
    this.uname=sessionStorage.getItem("uname");
    this.http.post('http://localhost:4000/inquiry',{uname:this.uname}).subscribe((data:any)=>{
      console.log(data);
    this.inquiry= data['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_CUST_INQUIRYLIST_FM.Response']['IT_INQUIRY_LIST']['item'];
    console.log(this.inquiry);
    // this.docnum= data['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_CUST_INQUIRYLIST_FM.Response']['IT_INQUIRY_LIST']['item'].VBELN._text;
    
    var i;
    for(i=0; i <= this.inquiry.length; i++){
      var lendzero = this.inquiry[i].VBELN._text;
      const temp_date = this.pipe.transform(this.inquiry[i].AUDAT._text, 'MM/dd/yyyy')
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
    // function sortTable() {
    //   var table, rows, switching, i, x, y, shouldSwitch;
    //   table = document.getElementById("myTable");
    //   switching = true;
    //   /*Make a loop that will continue until
    //   no switching has been done:*/
    //   while (switching) {
    //     //start by saying: no switching is done:
    //     switching = false;
    //     if(table != null){
    //     rows = table.rows;
    //     }
    //     /*Loop through all table rows (except the
    //     first, which contains table headers):*/
    //     for (i = 1; i < (rows.length - 1); i++) {
    //       //start by saying there should be no switching:
    //       shouldSwitch = false;
    //       /*Get the two elements you want to compare,
    //       one from current row and one from the next:*/
    //       x = rows[i].getElementsByTagName("TD")[0];
    //       y = rows[i + 1].getElementsByTagName("TD")[0];
    //       //check if the two rows should switch place:
    //       if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
    //         //if so, mark as a switch and break the loop:
    //         shouldSwitch = true;
    //         break;
    //       }
    //     }
    //     if (shouldSwitch) {
    //       /*If a switch has been marked, make the switch
    //       and mark that a switch has been done:*/
    //       rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
    //       switching = true;
    //     }
    //   }
    // }
    
  }

  
}
