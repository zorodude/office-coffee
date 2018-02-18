import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Order } from './order';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class OrderService {

  constructor(private http: Http) { }

  // post new order
  //@TODO change any to use class
  create_order(new_order: Order): Promise <any> {
    console.log('service > create_order:');
    console.log(new_order);
    return this.http.post('/api/new', new_order)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

	// get list of orders
  retrieve_orders(): Promise <void | Order[]>{
    console.log('service: retrieve orders')
    return this.http.get('/api/orders')
      .toPromise()
      .then(response => response.json() as Order[])
      .catch(this.handleError);
  }

  private handleError (error: any){
    let err_msg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : `Server error`;
    console.error(err_msg)  // log to console instead
  }

}
