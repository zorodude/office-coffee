import { Component, Input } from '@angular/core';
import { Order } from './order';
import { OrderService } from './order.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'add-order',
  templateUrl: './add-order.component.html',
  providers: [ OrderService ]
})
export class AddOrderComponent {

  submit_invalid : Boolean = false;
  button_submitting : Boolean = false;
  submitted = false;
  button_text = 'Order Up';
  order_id : String;

  constructor (private order_service: OrderService) {}

  onSubmit({ value, valid }: { value: Order, valid: boolean }) {

    if(valid){
      this.button_text = 'Processing...';
      this.button_submitting = true;

      this.order_service.create_order(value).then((reply) => {
        if (reply.status === 'success'){
          this.button_text = 'Sent';
          this.submitted = true;
          this.order_id = reply.id;
        }else{
          console.log('DB Error: ' +reply.message)
          this.button_submitting = false;
        }
      });

    }else{
      //pass error to display in child
      this.submit_invalid = true;
    }

  }

}
