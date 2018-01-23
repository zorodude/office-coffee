import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Order } from './order';
import { OrderService } from './order.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: '#app-root',
  templateUrl: './app.component.html',
  providers: [ OrderService ]
})
export class AppComponent {

  submit_invalid : Boolean = false;
  constructor (private order_service: OrderService) {
  }

  submitted = false;
  button_text = 'Order Up';
  order_id : String;

  onSubmit({ value, valid }: { value: Order, valid: boolean }) {

    console.log('onSubmit value:')
    console.log(value);
    console.log('onSubmit valid:')
    console.log(valid);
    if(valid){
      this.button_text = 'Processing...';

      // this.order_service.create_order(value).then((new_order: Order) => {
      // console.log('subitting ' +new_order);
      this.order_service.create_order(value).then((reply) => {
        if (reply.status === 'success'){
          console.log('id is ' +reply.id)
          this.button_text = 'Sent';
          this.submitted = true;
          this.order_id = reply.id;
        }else{
          console.log('Submit Error: ' +reply.message)
        }
      });

    }else{
      console.log('onSubmit: invalid form')
      //pass error to display in child
      this.submit_invalid = true;
    }

  }

  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      let chng = changes[propName];
      let cur  = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      console.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    }
  }

}
