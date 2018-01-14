import { Component } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: '.text-fields',
  templateUrl: './text-fields.component.html',

  // use this to enable using nested forms
  viewProviders: [ { provide: ControlContainer, useExisting: NgForm } ]
})
export class TextFieldsComponent {
}
