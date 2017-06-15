import { NgModule }      from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule } from '@angular/material';

import { SimulatorComponent }  from './simulator.component';
import { SimFormComponent } from './input-form/form.component';

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    HttpModule,
    NoopAnimationsModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule
     ],
  declarations: [ SimulatorComponent, SimFormComponent ],
  exports: [ SimulatorComponent, SimFormComponent ],
})
export class SimulatorModule { }