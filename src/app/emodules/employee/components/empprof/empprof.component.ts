import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-empprof',
  templateUrl: './empprof.component.html',
  styleUrls: ['./empprof.component.css']
})
export class EmpprofComponent implements OnInit {
  profile:any;
  uname:any;
  fname:any;
lname:any;
city:any;
country:any;
state:any = "Tamil Nadu";
pincode:any;
street:any;
mobile:any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.uname=sessionStorage.getItem("uname");
    this.http.post('http://localhost:4000/eprof',{uname:this.uname}).subscribe((data:any)=>{
      console.log(data);
    this.fname=data['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_EMP_PROF_BK.Response']['EMP_DATA'].ENAME._text;
    
    this.street=data['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_EMP_PROF_BK.Response']['EMP_DATA'].STRAS._text;
    this.city=data['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_EMP_PROF_BK.Response']['EMP_DATA'].ORT01._text;
    // this.state=data['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_EMP_PROF_BK.Response']['EMP_DATA'].NAME1._text;
    this.country=data['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_EMP_PROF_BK.Response']['EMP_DATA'].LAND._text;
    this.pincode=data['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_EMP_PROF_BK.Response']['EMP_DATA'].PSTLZ._text;
    this.mobile=data['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_EMP_PROF_BK.Response']['EMP_DATA'].TELNR._text;
    console.log(this.fname);
  })
  }

}
