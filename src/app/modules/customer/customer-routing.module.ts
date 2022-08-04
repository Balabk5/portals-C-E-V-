import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDashboardComponent } from './components/customer-dashboard/customer-dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { InquirydataComponent } from './components/inquirydata/inquirydata.component';
import { ListofdeliveryComponent } from './components/listofdelivery/listofdelivery.component';
import { SaleorderdataComponent } from './components/saleorderdata/saleorderdata.component';
import { FinancesheetComponent } from './components/financesheet/financesheet.component';
import { InvoicedetialsComponent } from './components/invoicedetials/invoicedetials.component';
import { PaymentagingComponent } from './components/paymentaging/paymentaging.component';
import { CdmemoComponent } from './components/cdmemo/cdmemo.component';
import { CustauthGuard } from 'src/app/gaurd/cauth/custauth.guard';

const routes: Routes = [
  {
    path: '',
    component: CustomerDashboardComponent,
    children: [
      { path: 'Profile', component: ProfileComponent ,canActivate:[CustauthGuard]},
      { path: 'Inquirydata', component: InquirydataComponent ,canActivate:[CustauthGuard]},
      { path: 'listOfDelivery', component: ListofdeliveryComponent ,canActivate:[CustauthGuard]},
      { path: 'saleOrder', component: SaleorderdataComponent ,canActivate:[CustauthGuard]},
      { path: '', redirectTo: '/customer/Profile', pathMatch: 'full',canActivate:[CustauthGuard] },
      { path: 'financesheet', component: FinancesheetComponent,canActivate:[CustauthGuard] },
      { path: 'paymentaging', component: PaymentagingComponent,canActivate:[CustauthGuard] },
      { path: 'invoiceDetial', component: InvoicedetialsComponent,canActivate:[CustauthGuard] },
      { path: 'CDmemo', component: CdmemoComponent,canActivate:[CustauthGuard] },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerRoutingModule {}
