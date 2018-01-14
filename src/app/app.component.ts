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

  constructor (private order_service: OrderService) {}

  submitted = false;
  onSubmit({ value, valid }: { value: Order, valid: boolean }) {

    console.log(value, valid);
    if(valid){
      // @TODO await positive reply from server
      this.submitted = true;
      this.order_service.create_order(value).then((new_order: Order) => {
        console.log('subitting ' +new_order);
      });

    }

  }

}
