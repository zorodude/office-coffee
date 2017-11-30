import { Component, OnInit } from '@angular/core';
import { Beverage } from '../beverage';
import { BEVERAGES } from '../beverages';

@Component({
  selector: '.beverages',
  templateUrl: './beverages.component.html',
})
export class BeveragesComponent {

  beverages = BEVERAGES;

}
