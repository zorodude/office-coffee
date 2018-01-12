import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Order } from './order';

@Injectable()
export class OrderService {

  constructor(private http: Http) { }

  // post new order
  create_order(new_order: Order): Promise <void | Order> {
    console.log('service > create_order:');
    console.log(new_order);
    return this.http.post('/new', new_order)
      .toPromise()
      .then(response => response.json() as Order)
      .catch(this.handleError);
  }

  private handleError (error: any){
    let err_msg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : `Server error`;
    console.error(err_msg)  // log to console instead
  }

}
