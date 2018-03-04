import { Component, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'sizes',
  templateUrl: './sizes.component.html',
  viewProviders: [ { provide: ControlContainer, useExisting: NgForm } ]
})
export class SizesComponent {

  sizes = ['sm','md','lg','xl'];
  default : String;

  ngOnInit() {
    this.default = this.sizes[1];
  }

}
