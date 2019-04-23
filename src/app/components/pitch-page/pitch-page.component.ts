import { Component, OnInit, ViewChild } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { SalesService } from '../../Services/sales.service';
import { UserService } from '../../Services/user.service';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';

@Component({
  selector: 'pitch-page',
  templateUrl: './pitch-page.component.html',
  styleUrls: ['./pitch-page.component.css']
})
export class PitchPageComponent implements OnInit {

  clientForm: FormGroup;
  pitchForm: FormGroup;
  submitClientData: boolean = false;
  pitch: String = null;

  clientAreas;
  user;
  pitchData;

  

  constructor(private fb: FormBuilder, private salesService: SalesService, private userService: UserService) { }

  @ViewChild('autosize') autosize: CdkTextareaAutosize;


  ngOnInit() {
    this.clientAreas = this.salesService.areaPitch;
    this.createForm();
    this.user = this.userService.getCurrentUser();
  }

  createForm(){
    this.clientForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      client: this.fb.group({
        clientFirstName: ['', [Validators.required]],
        clientLastName: ['', Validators.required],
        clientOrganization: ['', Validators.required],
        clientTitle: ['', Validators.required],
        clientArea: ['', Validators.required]
      })
    });

    
  }

  // convenience getter for easy access to form fields
  get cf() { return this.clientForm.controls; }

  generatePitch(){    
    this.submitClientData = true;

    if(this.clientForm.invalid){
      return;
    }

    this.pitchData = this.clientForm.value;
    this.pitch = this.salesService.generatePitch(this.user, this.pitchData);

    this.pitchForm = this.fb.group({
      pitch: [this.pitch]
    });
  }

  copyPitch(){
    console.log(this.pitchForm.value.pitch)
  } 
  

}
