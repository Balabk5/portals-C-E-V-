import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendorRoutingModule } from './vendor-routing.module';
import { VendordashboardComponent } from './components/vendordashboard/vendordashboard.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { PurchaseorderComponent } from './components/purchaseorder/purchaseorder.component';
import { GoodsreceiptComponent } from './components/goodsreceipt/goodsreceipt.component';
import { RecforqtnComponent } from './components/recforqtn/recforqtn.component';
import { FinancesheetComponent } from './components/financesheet/financesheet.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { PaymentageingComponent } from './components/paymentageing/paymentageing.component';
import { CdmemoComponent } from './components/cdmemo/cdmemo.component';
import { DbmemoComponent } from './components/dbmemo/dbmemo.component';
import { ProfileComponent } from './components/profile/profile.component';


@NgModule({
  declarations: [
    VendordashboardComponent,
    SidenavComponent,
    PurchaseorderComponent,
    GoodsreceiptComponent,
    RecforqtnComponent,
    FinancesheetComponent,
    InvoiceComponent,
    PaymentageingComponent,
    CdmemoComponent,
    DbmemoComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    VendorRoutingModule
  ]
})
export class VendorModule { }
