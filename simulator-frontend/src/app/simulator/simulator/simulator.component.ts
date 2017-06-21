import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import {NgForm} from '@angular/forms';

import { FinantialPlan } from '../model/finantial-plan';

@Component({
  selector: 'app-simulator',
  templateUrl: './simulator.component.html',
  styleUrls: ['./simulator.component.css']
})
export class SimulatorComponent implements OnInit {

  myData: Array<any>;
  selectedValue: string;
  test = 'test';

  private plan : FinantialPlan;
  private planing?: Array<FinantialPlan>;


  months = [
    {value: '1', viewValue: 'Enero'},
    {value: '2', viewValue: 'Febrero'},
    {value: '3', viewValue: 'Marzo'},
    {value: '4', viewValue: 'Abril'},
    {value: '5', viewValue: 'Mayo'},
    {value: '6', viewValue: 'Junio'},
    {value: '7', viewValue: 'Julio'},
    {value: '8', viewValue: 'Agosto'},
    {value: '9', viewValue: 'Septiembre'},
    {value: '10', viewValue: 'Octubre'},
    {value: '11', viewValue: 'Noviembre'},
    {value: '12', viewValue: 'Diciembre'}

  ];

  constructor(private http:Http) {
    
    this.http.get('https://jsonplaceholder.typicode.com/photos')
      .map(response => response.json())
      .subscribe(res => this.myData = res);

  }

  ngOnInit() {
    this.planing = new Array<FinantialPlan>();
  }


  addToPlan(plan: FinantialPlan){
    this.planing.push(plan);
    
  }


  sayHello(){
      this.test = 'hello!';

//      console.info(this.test);


  }
}