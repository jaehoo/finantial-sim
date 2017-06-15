import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import 'hammerjs';

import { AppComponent } from './app.component';
import { SimulatorModule } from './simulator/simulator.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SimulatorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
