import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
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

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.uname=sessionStorage.getItem("uname");
    this.http.post('http://localhost:4000/profile',{uname:this.uname}).subscribe((data:any)=>{
      console.log(data);
    this.fname=data['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_CUST_PROFILE_BK.Response']['CUST_PROFILE'].NAME1._text;
    this.lname=data['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_CUST_PROFILE_BK.Response']['CUST_PROFILE'].NAME2._text;
    this.street=data['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_CUST_PROFILE_BK.Response']['CUST_PROFILE'].STRAS._text;
    this.city=data['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_CUST_PROFILE_BK.Response']['CUST_PROFILE'].ORT01._text;
    // this.state=data['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_CUST_PROFILE_BK.Response']['CUST_PROFILE'].NAME1._text;
    this.country=data['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_CUST_PROFILE_BK.Response']['CUST_PROFILE'].COUNTRY._text;
    this.pincode=data['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_CUST_PROFILE_BK.Response']['CUST_PROFILE'].PSTLZ._text;
    this.mobile=data['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_CUST_PROFILE_BK.Response']['CUST_PROFILE'].TELF1._text;
    console.log(this.fname);
    


  // sessionStorage.setItem("fname",this.fname);
  // sessionStorage.setItem("lname",this.lname);
  // sessionStorage.setItem("city",this.city);
  // sessionStorage.setItem("street",this.street);
  // sessionStorage.setItem("state",this.state);
  // sessionStorage.setItem("pincode",this.pincode);
  // sessionStorage.setItem("mobile",this.mobile);
  // sessionStorage.setItem("country",this.country);


  })
}

}
