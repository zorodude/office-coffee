import { Component } from '@angular/core';
import { Beverage } from './beverage';

@Component({
  selector: '#app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  // TODO: handle sub-beverage options
  beverageOptions = 'handle tea options';

  userName = "";

  notes = "";

  submitted = false;

  onSubmit() { this.submitted = true; }

}
