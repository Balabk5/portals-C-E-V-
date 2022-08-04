import { Component, OnInit } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { SignInData } from '../model/esigndata';
import { AuthenticationService } from '../service/authentication/eauthentication.service';
import { HttpClient } from '@angular/common/http';
import { NgxUiLoaderService } from "ngx-ui-loader";

@Component({
  selector: 'app-elogin',
  templateUrl: './elogin.component.html',
  styleUrls: ['./elogin.component.css']
})
export class EloginComponent implements OnInit {
  person : string="";
  pass : string="";
  // loginForm: FormGroup;
  loading = false;
  submitted = false;
  // returnUrl: string;
  error = '';
  uname : string="";
pwd : string="";
name: string="";

isFormValid = false;
areCredentialsInvalid = false;
  constructor(private http:HttpClient, private router: Router, private authenticationService:AuthenticationService,private ngxService: NgxUiLoaderService) { }

  ngOnInit(): void {
    this.ngxService.start(); // start foreground spinner of the master loader with 'default' taskId
    // Stop the foreground loading after 5s
    setTimeout(() => {
      this.ngxService.stop(); // stop foreground spinner of the master loader with 'default' taskId
    }, 2000);

    // OR
    this.ngxService.startBackground("do-background-things");
    // Do something here...
    this.ngxService.stopBackground("do-background-things");

    this.ngxService.startLoader("loader-01"); // start foreground spinner of the loader "loader-01" with 'default' taskId
    // Stop the foreground loading after 5s
    setTimeout(() => {
      this.ngxService.stopLoader("loader-01"); // stop foreground spinner of the loader "loader-01" with 'default' taskId
    }, 5000);

    if(this.authenticationService.loggedIn()){
      this.router.navigate(['employee'])
    }
  }
  getValues(val:string){
   console.warn(val) ;
  }
  getresult(f:any) {
    if (!f.valid) {
      this.isFormValid = true;
      this.areCredentialsInvalid = false;
      return;
    }
    this.checkCredentials(f);
  }
  
  private checkCredentials(signInForm:any) {
    const signInData = new SignInData(signInForm.value.uname, signInForm.value.pwd);
    this.authenticationService.authenticate(signInData);
    if (!signInData.ans) {
      // console.log("Check");
      this.isFormValid = false;
      this.areCredentialsInvalid = true;
    }
  }

}
