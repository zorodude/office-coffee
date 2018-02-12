import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddOrderComponent } from './add-order.component';
import { OrdersComponent } from './orders/orders.component';

const routes : Routes = [
  { path: 'orders', component: OrdersComponent },
  { path: '**', component: AddOrderComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
