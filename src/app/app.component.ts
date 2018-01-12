import { Component, Input } from '@angular/core';
import { Order } from './order';
import { OrderService } from './order.service';

@Component({
  selector: '#app-root',
  templateUrl: './app.component.html',
  providers: [ OrderService ]
})
export class AppComponent {

  // TODO: handle sub-beverage options
  beverageOptions = 'handle tea options';

  // submitted = false;
  // onSubmit() { this.submitted = true; }

  constructor (private order_service: OrderService) {}

  create_new_order(order: Order): void {
    order = {
      name: 'test',
      beverage: 'dark roast',
      size: 'md',
      additives: {
        milk: 2,
        cream: 2,
        sugar: 1
      }
    }

    this.order_service.create_order(order).then((new_order: Order) => {
      console.log('subitting ' +new_order);
    });
  }

}
