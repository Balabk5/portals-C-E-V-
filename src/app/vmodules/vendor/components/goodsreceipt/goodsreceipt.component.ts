import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-goodsreceipt',
  templateUrl: './goodsreceipt.component.html',
  styleUrls: ['./goodsreceipt.component.css']
})
export class GoodsreceiptComponent implements OnInit {
  uname:any;
  goods:any;
  msg ="-";
  dateformat1: string[] = [];
  dateformat2: string[] = [];
  pipe = new DatePipe('en-US')
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.uname=sessionStorage.getItem("uname");
    this.http.post('http://localhost:4000/GoodsReceipt',{uname:this.uname}).subscribe((data:any)=>{
      console.log(data);
    this.goods= data['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_VP_GOODS_537.Response']['T_GOODS_HEAD']['item'].slice(1);
    console.log(this.goods);
    
  var i;
  for(i=0; i <= this.goods.length; i++){
    
    const temp_date = this.pipe.transform(this.goods[i].ENTRY_DATE._text, 'MM/dd/yyyy')
    const temp_date1 = this.pipe.transform(this.goods[i].PSTNG_DATE._text, 'MM/dd/yyyy')
    console.log(temp_date)
    // console.log(withoutLeading0);
    if(temp_date && temp_date1 != null){
      this.dateformat1.push(temp_date);
      this.dateformat2.push(temp_date1);
      console.log(temp_date)
    }
    
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
        td = tr[i].getElementsByTagName("td")[3];
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
