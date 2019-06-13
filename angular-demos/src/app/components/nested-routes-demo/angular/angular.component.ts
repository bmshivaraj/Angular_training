import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent implements OnInit {

  //this is parent component for 
  // 1. Angular7Component
  // 2. AngularjsComponent

  constructor() { }

  ngOnInit() {
  }

  nameAddedtoNameList(name){
    console.log("name added : "+name);
  }

  nameDeletedFromNameList(name){
    console.log("name deleted : "+name);
  }
}
