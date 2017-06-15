import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { SimulatorModule } from '../simulator/simulator.module'
import 'hammerjs';

@NgModule({
  imports:      [ 
    BrowserModule, SimulatorModule
         ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
