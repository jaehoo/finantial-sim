import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SimulatorComponent } from './simulator/simulator.component';
import { CustomMaterialModule } from '../custom-material/custom-material.module';

@NgModule({
  imports: [
    CommonModule,
    CustomMaterialModule,
    
  ],
  declarations: [SimulatorComponent],
  exports: [ SimulatorComponent ]
  
})
export class SimulatorModule { }
