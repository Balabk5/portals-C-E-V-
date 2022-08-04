import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
require('jspdf-autotable');
const { jsPDF } = require("jspdf");
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-payslip',
  templateUrl: './payslip.component.html',
  styleUrls: ['./payslip.component.css']
})
export class PayslipComponent implements OnInit {
  uname:any;
  payslip:any;
  msg: string = "no data";
  datefortamt: string[]= [];
  datefortamt1: string[]= [];
  datefortamt2: string[]= [];
  roundoff: string[]=[];
  pay_data: any;
  pipe = new DatePipe('en-US')
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.uname=sessionStorage.getItem("uname");
    this.http.post('http://localhost:4000/payslip',{uname:this.uname}).subscribe((data:any)=>{
      console.log(data);
    this.payslip= data['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_EP_PAYSLIP_537.Response']['IT_PAYSLIP']['item'];
    console.log(this.payslip);

    
    var i;
    for(i=0; i <= this.payslip.length; i++){
      // var lendzero = this.payslip[i].VBELN._text;
      const temp_date = this.pipe.transform(this.payslip[i].FPBEGIN._text, 'MM/dd/yyyy')
      const temp_date1 = this.pipe.transform(this.payslip[i].FPEND._text, 'MM/dd/yyyy')
      const temp_date2 = this.pipe.transform(this.payslip[i].PAYDATE._text, 'MM/dd/yyyy')
      var round_off = parseInt(this.payslip[i].SEQUENCENUMBER._text,10);
      // const withoutLeading0 = parseInt(lendzero, 10);
      // console.log(withoutLeading0);
      if(temp_date && temp_date1 && temp_date2 != null){
        this.datefortamt.push(temp_date);
        this.datefortamt1.push(temp_date1);
        this.datefortamt2.push(temp_date2);
        const temp_roundoff = round_off.toFixed(2)
        this.roundoff.push(temp_roundoff);
        console.log(temp_date)
      }
      
    }

    

  })
}
// SavePDF()
//   {
 
//     let doc = new jsPDF();
//     var prepare: any[] = [];
//     this.payslip.forEach((e:any)=>{
      
//        var tempObj :any[] = [];
//       console.log(tempObj);
//       tempObj.push(e.FPPERIOD._text);
//       tempObj.push(e.FPBEGIN._text||this.msg);
//       tempObj.push(e.FPEND._text||this.msg);
//       tempObj.push(e.BONUSDATE._text||this.msg);
//       tempObj.push(e.PAYDATE._text||this.msg);
//       tempObj.push(e.PAYTYPE_TEXT._text||this.msg);
      
//       prepare.push(tempObj);
//       console.log(tempObj)
//     });
//     doc.text("Payslip data",10,10);
//     doc.autoTable({
//       head: [['period payroll','Start_Date','Sequence number','End date','Pay date','Payroll type']],
//       body: prepare
//   });
//     doc.save('Payslip.pdf'); 
 
//   }

 SavePDF() {
  
   const source = `data:application/pdf;base64, ${this.pay_data}`;
   const link = document.createElement("a");
   link.href = source;
   link.download= 'payslip.pdf'
   link.click();
    }

SavePDF1(seq_no:any)
{
  this.uname=sessionStorage.getItem("uname");
  console.log(seq_no);
  this.http.post('http://localhost:4000/payslippdf', {uname:this.uname, seq_no}).subscribe((data:any)=>{
      this.pay_data = data['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_EMP_PAYPDF_BK.Response']['EX_PAYSLIP_PDF']._text;
      // console.log(this.pay_data);
      this.SavePDF();
    })
}





}
