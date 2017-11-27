import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.tea-options',
  templateUrl: './tea-options.component.html',
  styleUrls: ['./tea-options.component.css']
})
export class TeaOptionsComponent implements OnInit {

  teas : ['Peppermint','Green Tea','Earl Grey','English Breakfast','Orange Pekoe','Honey Lemon','Apple Cinnamon','Chamomile','Chai Tea','Steeped (loose leaf)']

  constructor() { }

  ngOnInit() {
  }

}
