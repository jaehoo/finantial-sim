import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'sim-form',
  templateUrl: '/components/simulator/input-form/form.component.html',
  //styleUrls: ['./app.component.css']
})
export class SimFormComponent {
  title = 'app';

    myData: Array<any>;

  constructor(private http:Http) {
    
    this.http.get('https://jsonplaceholder.typicode.com/photos')
      .map(response => response.json())
      .subscribe(res => this.myData = res);

  }
}
