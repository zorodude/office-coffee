import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.additives',
  templateUrl: './additives.component.html',
})
export class AdditivesComponent {

  additives = {
    milk: 0,
    cream: 2,
    sugar: 2
  }

  increase(prop){
    console.log('add one to '+prop)
    this.additives[prop] ++;
  }

}
