import { Component, OnInit } from '@angular/core';
import { Order } from '../order';
import { OrderService } from '../order.service';

@Component({
  selector: '.orders',
  templateUrl: './orders.component.html',
  providers: [ OrderService ]
})


export class OrdersComponent implements OnInit {

  rep = {delivered: false, received: 'unset'};
  orders: Order[];

  constructor (private order_service: OrderService){}

  ngOnInit() {
		console.log('component: retrieve orderservice')
    // @TODO pull in all orders and pretty print
    this.order_service.retrieve_orders().then((reply) => {
      if (reply.status === 'success'){
        this.rep.delivered = true;
        this.rep.received = reply;
      }else{
        console.log('DB Error: ' +reply.message)
      }
    });

  }

}
