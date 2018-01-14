import { Component, Input } from '@angular/core';
import { Order } from './order';
import { OrderService } from './order.service';
import { TextFieldsComponent } from './text-fields/text-fields.component';

@Component({
  selector: '#app-root',
  templateUrl: './app.component.html',
  providers: [ OrderService ]
})
export class AppComponent {

  // submitted = false;
  onSubmit({ value, valid }: { value: Order, valid: boolean }) {
    console.log(value, valid);
  }

  constructor (private order_service: OrderService) {}

  // create_new_order(order: Order): void {
  //   order = {
  //     name: 'test',
  //     beverage: 'dark roast',
  //     size: 'md',
  //     additives: {
  //       milk: 2,
  //       cream: 2,
  //       sugar: 1
  //     }
  //   }
  //
  //   this.order_service.create_order(order).then((new_order: Order) => {
  //     console.log('subitting ' +new_order);
  //   });
  // }

}
