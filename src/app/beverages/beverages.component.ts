import { Component, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { BEVERAGES } from '../beverages';

@Component({
  selector: 'beverages',
  templateUrl: './beverages.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class BeveragesComponent {

  beverages = BEVERAGES;
  default : String;

  ngOnInit(){
    this.default = this.beverages[0];
  }

}
