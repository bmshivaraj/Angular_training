import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter-component.component.html',
  styleUrls: ['./counter-component.component.css']
})
export class CounterComponentComponent implements OnInit {

  count: number = 1;
  
  constructor() { }

  ngOnInit() {
  }

  incrementCount()
  {
    this.count++;
  }

  decrementCount(){
    this.count--;
  }
}
