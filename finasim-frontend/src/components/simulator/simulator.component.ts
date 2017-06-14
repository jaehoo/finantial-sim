import { Component } from '@angular/core';

@Component({
  selector: 'simulator',
  template: `<h1>Hello {{name}}</h1>`,
})
export class SimulatorComponent  { name = 'TEST'; }
