import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustauthGuard } from 'src/app/gaurd/cauth/custauth.guard';
import { VendorauthGuard } from 'src/app/gaurd/eauth/vendorauth.guard';
import { CdmemoComponent } from './components/cdmemo/cdmemo.component';
import { DbmemoComponent } from './components/dbmemo/dbmemo.component';
import { FinancesheetComponent } from './components/financesheet/financesheet.component';
import { GoodsreceiptComponent } from './components/goodsreceipt/goodsreceipt.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { PaymentageingComponent } from './components/paymentageing/paymentageing.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PurchaseorderComponent } from './components/purchaseorder/purchaseorder.component';
import { RecforqtnComponent } from './components/recforqtn/recforqtn.component';
import { VendordashboardComponent } from './components/vendordashboard/vendordashboard.component';




const routes: Routes = [
  {
    path: '',
    component:VendordashboardComponent,
    children:[
      {path:'', redirectTo:'/vendor/profile', pathMatch:'full'},
      {path:'profile', component:ProfileComponent,canActivate:[VendorauthGuard]},
      {path:'cdmemo', component:CdmemoComponent,canActivate:[VendorauthGuard]},
      {path:'dbmemo', component:DbmemoComponent,canActivate:[VendorauthGuard]},
      {path:'financesheet', component:FinancesheetComponent,canActivate:[VendorauthGuard]},
      {path:'goodsreceipt', component:GoodsreceiptComponent,canActivate:[VendorauthGuard]},
      {path:'invoice', component:InvoiceComponent,canActivate:[VendorauthGuard]},
      {path:'paymentageing', component:PaymentageingComponent,canActivate:[VendorauthGuard]},
      {path:'purchaseorder', component:PurchaseorderComponent,canActivate:[VendorauthGuard]},
      {path:'recforqtn', component:RecforqtnComponent,canActivate:[VendorauthGuard]},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorRoutingModule { }


