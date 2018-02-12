import { Component, OnInit } from '@angular/core';
import { Order } from '../order';
import { OrderService } from '../order.service';

@Component({
  selector: '.orders',
  templateUrl: './orders.component.html',
  providers: [ OrderService ]
})


export class OrdersComponent implements OnInit {

  r = {delivered: false, reply: 'unset'};

  constructor (private order_service: OrderService){}

  ngOnInit() {

    // @TODO pull in all orders and pretty print
    // this.order_service.retrieve_orders().then((reply) => {
    //   if (reply.status === 'success'){
    //     this.r.delivered = true;
    //     this.r.reply = reply;
    //   }else{
    //     console.log('DB Error: ' +reply.message)
    //   }
    // });
  }

}
