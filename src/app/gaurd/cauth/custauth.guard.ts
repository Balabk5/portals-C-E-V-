import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/service/authentication/authentication.service';


@Injectable({
  providedIn: 'root'
})
export class CustauthGuard implements CanActivate {
  constructor (private auth: AuthenticationService, private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // return true;
    if(localStorage.getItem("uname")==null){
      this.router.navigate(['login'])
      return false;
    }
    else{
      return true;
    }
  }
  
}
