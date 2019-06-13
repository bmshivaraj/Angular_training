import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  empForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.empForm = new FormGroup({
      id: new FormControl(null, [Validators.required, Validators.min(1)]),
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      salary: new FormControl('25000', [Validators.min(25000)]),
      skills: new FormArray([new FormControl('')])
    })
  }

  save(){
    console.log(this.empForm.value);
  }

  addSkill() {
    const skills = <FormArray> this.empForm.controls['skills'];
    skills.push(new FormControl(''))
  }
}
