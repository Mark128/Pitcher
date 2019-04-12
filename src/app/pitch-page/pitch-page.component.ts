import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'pitch-page',
  templateUrl: './pitch-page.component.html',
  styleUrls: ['./pitch-page.component.css']
})
export class PitchPageComponent implements OnInit {

  pitchForm: FormGroup;

  user = {
    firstName: 'Mark',
    lastName: 'Antoniadis',
    title: 'Service Delivery Manager'
  }

  clientAreas = [
    {name: 'Software Development', pitch: 'this is my pitch for software development'}
  ]

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm(){
    this.pitchForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      client: this.fb.group({
        clientFirstName: [''],
        clientLastName: [''],
        clientOrganization: [''],
        clientTitle: [''],
        clientArea: ['']
      })
    });
  }

  onSubmit(){
    console.warn(this.pitchForm.value);
  }

}
