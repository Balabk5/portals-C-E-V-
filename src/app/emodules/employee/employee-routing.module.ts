import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VendorauthGuard } from 'src/app/gaurd/eauth/vendorauth.guard';
import { EmpauthGuard } from 'src/app/gaurd/vauth/empauth.guard';
import { EmpdashboardComponent } from './components/empdashboard/empdashboard.component';
import { EmpprofComponent } from './components/empprof/empprof.component';
import { LeavereqComponent } from './components/leavereq/leavereq.component';
import { PayslipComponent } from './components/payslip/payslip.component';


const routes: Routes = [
  {
    path: '',
    component: EmpdashboardComponent,
    children: [
      {
        path:'/employee/profile',redirectTo:'', pathMatch:'full'
      },
      {path:'profile', component:EmpprofComponent,canActivate:[EmpauthGuard]},
      {path:'leaveRequest', component: LeavereqComponent,canActivate:[EmpauthGuard]}, 
      {path:'payslip', component: PayslipComponent,canActivate:[EmpauthGuard]}
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
