import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddOrderComponent } from './add-order.component';
import { OrdersComponent } from './orders/orders.component';

const routes : Routes = [
  { path: '', component: AddOrderComponent },
  { path: 'orders', component: OrdersComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
