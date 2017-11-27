import { Component } from '@angular/core';
import { Beverage } from './beverage';

@Component({
  selector: '#app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  beverages = ['classic','dark','iced','tea'];

  // TODO: handle sub-beverage options
  beverageOptions = 'handle tea options';

  sizes = ['sm','md','lg','xl'];

  additives = ['milk','cream','sugar'];

  userName = "";

  notes = "";

  submitted = false;

  onSubmit() { this.submitted = true; }

}
