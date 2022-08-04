import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-dbmemo',
  templateUrl: './dbmemo.component.html',
  styleUrls: ['./dbmemo.component.css']
})
export class DbmemoComponent implements OnInit {
  uname:any;
  docnumlist: number[]=[];
  datefortamt: string[]=[];
  dmemo:any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.uname=sessionStorage.getItem("uname");
    this.http.post('http://localhost:4000/Vdebit',{uname:this.uname}).subscribe((data:any)=>{
      console.log(data);
    this.dmemo= data['SOAP:Envelope']['SOAP:Body']['ns0:ZVEN_DEBIT_FM_KRR.Response']['IT_DEBIT']['item'].slice(1);
    console.log(this.dmemo);
    var i;
  for(i=0; i <= this.dmemo.length; i++){
    
    var lendzero = this.dmemo[i].MATNR._text;
    
    const withoutLeading0 = parseInt(lendzero, 10);
    // console.log(withoutLeading0);
    
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
