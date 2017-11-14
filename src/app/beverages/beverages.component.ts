import { Component, OnInit } from '@angular/core';
import { Beverage } from '../beverage';

@Component({
  selector: '.beverages',
  templateUrl: './beverages.component.html',
  styleUrls: ['./beverages.component.css']
})
export class BeveragesComponent implements OnInit {

  beverage: Beverage = {
    id: 1,
    name: 'classic',
    selected: false
  }

  constructor() { }

  ngOnInit() {
  }

}
