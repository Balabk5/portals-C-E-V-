import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EloginComponent } from './elogin/elogin.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { CustomerModule } from './modules/customer/customer.module';
import { VloginComponent } from './vlogin/vlogin.component';
import { CustauthGuard } from './gaurd/cauth/custauth.guard';
import { VendorauthGuard } from './gaurd/eauth/vendorauth.guard';
import { EmpauthGuard } from './gaurd/vauth/empauth.guard';

const routes: Routes = [
  {path:'landingPage', component:HeaderComponent},
  {path: '', redirectTo: '/landingPage', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'vlogin', component:VloginComponent},
  {path:'elogin', component:EloginComponent},
  {path:'customer', loadChildren: ()=> import('./modules/customer/customer.module').then((m) => m.CustomerModule), canActivate:[CustauthGuard]},
  {path:'vendor', loadChildren:()=> import('./vmodules/vendor/vendor.module').then((m)=>m.VendorModule),canActivate:[VendorauthGuard]},
  {path:'employee', loadChildren:()=> import('./emodules/employee/employee.module').then((m)=>m.EmployeeModule),canActivate:[EmpauthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
