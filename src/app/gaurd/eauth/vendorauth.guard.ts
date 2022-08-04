import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/service/authentication/vauthentication.service';
AuthenticationService
@Injectable({
  providedIn: 'root'
})
export class VendorauthGuard implements CanActivate {
  constructor(private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // return true;
    if(localStorage.getItem("uname")==null){
      this.router.navigate(['vlogin'])
      return false;
    }
    else{
      return true;
    }
  }
  
}
