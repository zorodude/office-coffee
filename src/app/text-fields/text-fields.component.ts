import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: '.text-fields',
  templateUrl: './text-fields.component.html',
  viewProviders: [ { provide: ControlContainer, useExisting: NgForm } ]
})
export class TextFieldsComponent {

  @Input() is_invalid : Boolean;

  // runs when <input> is modified
  clearErrors(){
    this.is_invalid = false;
  }

}
