import { Component, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { Additives } from '../additives';
import { PRESETS } from '../presets';

@Component({
  selector: 'additives',
  templateUrl: './additives.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class AdditivesComponent {

  // must initialize as its own object to preserve presets
  additives: Additives = {milk:0, cream:0, sugar:0};

  //TODO remove: using for debug
  presets = PRESETS;

  default : number;

  // select ui when match is found
  matches_preset = null;

  ngOnInit(){
    // set default
    this.default = 1;
    this.usePreset(1);
    this.checkPresetMatch();
  }

  // add another when user clicks the digit
  increase(prop){
    this.additives[prop] ++;
    if (this.additives[prop] > 9){
      this.additives[prop] = 0;
    }
    this.checkPresetMatch();
  }

  // copy from object, to preserve presets
  usePreset(preset){
    for (let key in this.additives) {
      this.additives[key] = PRESETS[preset][key];
    }
    this.checkPresetMatch();
  }

  // highlight preset, if digits were individually modified and match
  checkPresetMatch(){
    for (let i =0; i < PRESETS.length; i++) {
      var perfect_match = true;
      for (let key in this.additives) {
        if (this.additives[key] !== PRESETS[i][key]) {
          perfect_match = false;
          break;
        }else{
        }
      }
      if (perfect_match){
        this.matches_preset = i;
        break;
      }else{
        this.matches_preset = null;
      }
    }
  }

}
