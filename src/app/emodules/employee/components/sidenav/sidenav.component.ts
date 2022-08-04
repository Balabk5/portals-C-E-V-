import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/service/authentication/authentication.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  uname:any;
  fname:any;
  practice:any;
  constructor(private http: HttpClient, private auth: AuthenticationService) { }

  ngOnInit(): void {
    this.uname=sessionStorage.getItem("uname");
    this.http.post('http://localhost:4000/eprof',{uname:this.uname}).subscribe((data:any)=>{
      console.log(data);
    this.fname=data['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_EMP_PROF_BK.Response']['EMP_DATA'].ENAME._text;
    this.practice = data['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_EMP_PROF_BK.Response']['EMP_DATA'].ORGEH_TXT._text;
    console.log(this.fname);
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
