import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from 'src/app/service/authentication/authentication.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  uname:any;
  fname:any;
  constructor(private http:HttpClient, private auth: AuthenticationService, private route: Router ) { }

  ngOnInit(): void {
    this.uname=sessionStorage.getItem("uname");
    this.http.post('http://localhost:4000/profile',{uname:this.uname}).subscribe((data:any)=>{
      console.log(data);
    this.fname=data['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_CUST_PROFILE_BK.Response']['CUST_PROFILE'].NAME1._text;
    console.log(this.fname)
  })
}
logout() {
  return this.auth.logout();
  
}
popupcust(){
  Swal.fire({
    title: 'Want to logout!',
    text: 'You will be logedout to the landing page',
    icon:'warning',
    showCancelButton: true,
    confirmButtonText: 'Logout'      ,
    cancelButtonText: 'Keep me in '
  }).then((result:any) =>{
    if(result.value){
      return this.logout();
      
    }
  })
}
}
