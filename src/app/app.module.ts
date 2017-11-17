import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BeveragesComponent } from './beverages/beverages.component';
import { TeaOptionsComponent } from './tea-options/tea-options.component';

@NgModule({
  declarations: [
    AppComponent,
    BeveragesComponent,
    TeaOptionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
