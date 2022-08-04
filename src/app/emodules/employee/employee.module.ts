import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmpprofComponent } from './components/empprof/empprof.component';
import { LeavereqComponent } from './components/leavereq/leavereq.component';
import { PayslipComponent } from './components/payslip/payslip.component';
import { EmpdashboardComponent } from './components/empdashboard/empdashboard.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';


@NgModule({
  declarations: [
    EmpprofComponent,
    LeavereqComponent,
    PayslipComponent,
    EmpdashboardComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule { }
