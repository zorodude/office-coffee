import { Component, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'tea-options',
  templateUrl: './tea-options.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class TeaOptionsComponent {

  teas = ['Peppermint','Green Tea','Earl Grey','English Breakfast','Orange Pekoe','Honey Lemon','Apple Cinnamon','Chamomile','Chai Tea','Steeped (loose leaf)'];
  default : String;

  ngOnInit() {
    this.default = this.teas[0];
  }

}
