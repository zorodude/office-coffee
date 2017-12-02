import { Component, OnInit } from '@angular/core';
import { Additives } from '../additives';
import { PRESETS } from '../presets';

@Component({
  selector: '.additives',
  templateUrl: './additives.component.html',
})
export class AdditivesComponent {

  // must initialize as its own object to preserve presets
  additives: Additives = {milk:0, cream:0, sugar:0};

  //TODO remove: using for debug
  presets = PRESETS;

  ngOnInit(){
    // set default
    this.usePreset(1);
  };

  // add another when user clicks the digit
  increase(prop){
    this.additives[prop] ++;
    if (this.additives[prop] > 9){
      this.additives[prop] = 0;
    }
  };

  // copy from object, to preserve presets
  usePreset(preset){
    for (let key in this.additives) {
      this.additives[key] = PRESETS[preset][key];
    }
  };

}
