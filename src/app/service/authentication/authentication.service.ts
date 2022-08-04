import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { SignInData } from 'src/app/model/signindata';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  name:any;
  ans = false;
  data1:any;
  code:any;
  isAuthenticated = false;
  constructor(private http:HttpClient ,private router:Router) { }
  authenticate(signInData: SignInData): void {
    this.checkCredentials(signInData);
  }
  checkCredential(signInData : SignInData){
    if (signInData.ans) {
      this.isAuthenticated = true;
      localStorage.setItem("uname",signInData.getLogin());
      this.router.navigate(['customer']);
      return true;
    }
    this.isAuthenticated = false;
    return false;
  }
  private checkCredentials(signInData: SignInData): void {  
    this.http.post('http://localhost:4000/login',{uname:signInData.getLogin(),pwd:signInData.getPassword()}).subscribe((data:any)=>{
      console.log(data);
      this.name=data['SOAP:Envelope']['SOAP:Body']['rfc:ZFM_CUSTLOGIN_BK.Response'].E_NAME._text;
      this.code = data['SOAP:Envelope']['SOAP:Body']['rfc:ZFM_CUSTLOGIN_BK.Response']['E_RETURN'].TYPE._text;
      console.log(this.code);
      if(this.code !='E'){
        sessionStorage.setItem('uname',signInData.getLogin());
        signInData.ans=true;
        // alert("Welcome " + this.name);
        Swal.fire("welcome " + this.name,'Logged in Successfully ','success');
        this.router.navigate(['customer']);
        this.checkCredential(signInData);
      } 
      else{
        Swal.fire('oops!','invalid password or user ID','warning');
        signInData.ans=false;
        this.checkCredential(signInData);
      }
    });

  }
  logout() {
    this.isAuthenticated = false;
    localStorage.clear();
    this.router.navigate(['']);
    
    
  }
  getIsAuthenticated(): boolean {
    return this.isAuthenticated;
  }
  loggedIn(){
    return !!localStorage.getItem("uname");
  }
}
