import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerDashboardComponent } from './components/customer-dashboard/customer-dashboard.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ProfileComponent } from './components/profile/profile.component';
import { InquirydataComponent } from './components/inquirydata/inquirydata.component';
import { SaleorderdataComponent } from './components/saleorderdata/saleorderdata.component';
import { ListofdeliveryComponent } from './components/listofdelivery/listofdelivery.component';
import { FinancesheetComponent } from './components/financesheet/financesheet.component';
import { InvoicedetialsComponent } from './components/invoicedetials/invoicedetials.component';
import { PaymentagingComponent } from './components/paymentaging/paymentaging.component';
import { CdmemoComponent } from './components/cdmemo/cdmemo.component';




@NgModule({
  declarations: [
    CustomerDashboardComponent,
    SidenavComponent,
    ProfileComponent,
    InquirydataComponent,
    SaleorderdataComponent,
    ListofdeliveryComponent,
    FinancesheetComponent,
    InvoicedetialsComponent,
    PaymentagingComponent,
    CdmemoComponent,
  
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule

  ]
})
export class CustomerModule { }
