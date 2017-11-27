import { Component, OnInit } from '@angular/core';
import { Beverage } from '../beverage';
import { BEVERAGES } from '../beverages';

@Component({
  selector: '.beverages',
  templateUrl: './beverages.component.html',
  styleUrls: ['./beverages.component.css']
})
export class BeveragesComponent implements OnInit {

  beverages = BEVERAGES;

  constructor() { }

  ngOnInit() {
  }

  // TODO: only for dev
  get diagnostic() { return JSON.stringify(this.beverages); }
}
