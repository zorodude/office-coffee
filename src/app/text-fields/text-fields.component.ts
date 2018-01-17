import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: '.text-fields',
  templateUrl: './text-fields.component.html',
  viewProviders: [ { provide: ControlContainer, useExisting: NgForm } ]
})
export class TextFieldsComponent {

  // @TODO reset to clean status after field is editted
  @Input() is_invalid : Boolean;

}
