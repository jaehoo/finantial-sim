import { Component } from '@angular/core';

@Component({
  selector: 'simulator',
  //template: `<h1>Hello {{name}}</h1> <sim-form></sim-form>`,
  templateUrl: '/components/simulator/simulator.html',
  styleUrls: ['/components/simulator/style-sim.css']
})
export class SimulatorComponent  { name = 'TEST'; }
