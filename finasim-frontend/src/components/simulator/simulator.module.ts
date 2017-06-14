import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SimulatorComponent }  from './simulator.component';
//import { SimulatorModule } from '../simulator/simulator.module'

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ SimulatorComponent ],
  exports: [ SimulatorComponent ],
})
export class SimulatorModule { }