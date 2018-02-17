import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Order } from './order';

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

  // get all orders
  // @TODO build a front-end for this (for print / checklist)
  // retrieve_orders(): Promise <void | Order[]>{
  // retrieve_orders(): Promise <any>{
  //   console.log('service > retrieve_orders');
  //   return this.http.get('/orders')
  //     .toPromise()
  //     .then(response => response.json() || [])
  //     .catch(this.handleError);
  // }

  retrieve_orders(): Promise <any>{
    console.log('service: retrieve orders')
    return this.http.get('/api/orders')
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  private handleError (error: any){
    let err_msg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : `Server error`;
    console.error(err_msg)  // log to console instead
  }

}
