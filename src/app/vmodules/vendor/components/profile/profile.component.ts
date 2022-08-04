import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
    this.http.post('http://localhost:4000/vprofile',{uname:this.uname}).subscribe((data:any)=>{
      console.log(data);
    this.fname=data['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_VEN_PROFILE_BK.Response']['VEND_PROFILE'].FNAME._text;
    this.city=data['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_VEN_PROFILE_BK.Response']['VEND_PROFILE'].CITY._text;
    this.pincode=data['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_VEN_PROFILE_BK.Response']['VEND_PROFILE'].PINCODE._text;
    this.lname=data['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_VEN_PROFILE_BK.Response']['VEND_PROFILE'].VENDOR._text;
    this.street=data['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_VEN_PROFILE_BK.Response']['VEND_PROFILE'].ADDRESS._text;
    this.country=data['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_VEN_PROFILE_BK.Response']['VEND_PROFILE'].COUNTRY._text;
    this.mobile=data['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_VEN_PROFILE_BK.Response']['VEND_PROFILE'].TELEPHONE._text;
    
    
    
  })
}

}
