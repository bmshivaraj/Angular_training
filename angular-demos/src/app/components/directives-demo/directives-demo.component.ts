import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-demo',
  templateUrl: './directives-demo.component.html',
  styleUrls: ['./directives-demo.component.css']
})
export class DirectivesDemoComponent implements OnInit {

  names: Array<string> = [];
  people: Array<any> = [];

  constructor() { }

  ngOnInit() {
    this.names.push('Shivaraj', 'Pooja', 'Avinash', 'Madhuri');

    this.people.push({name: 'Shivaraj', city: 'Bangalore', gender: 'Male', age: 38 });
    this.people.push({name: 'Pooja', city: 'Delhi', gender: 'Female', age: 36 });
    this.people.push({name: 'Avinash', city: 'Pune', gender: 'Male', age: 40 });
    this.people.push({name: 'Madhuri', city: 'Chennai', gender: 'Female', age: 42 });
  }

  // dont call pop instead use splice
  deletePerson(n: number): void {
    this.people.splice(n, 1);
  }
}
