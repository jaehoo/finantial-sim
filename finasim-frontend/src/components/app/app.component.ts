import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1><div>
  <simulator></simulator>
  </div>`,
})
export class AppComponent  { name = 'Angular'; }
