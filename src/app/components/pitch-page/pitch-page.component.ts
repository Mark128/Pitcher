import { Component, OnInit, ViewChild } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { SalesService } from '../../Services/sales.service';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import { FirebaseService } from 'src/app/Services/firebase.service';
import { AuthenticationService } from 'src/app/Services/authentication.service';


@Component({
  selector: 'pitch-page',
  templateUrl: './pitch-page.component.html',
  styleUrls: ['./pitch-page.component.css']
})
export class PitchPageComponent implements OnInit {

  //Forms
  clientForm: FormGroup;
  pitchForm: FormGroup;
  //Form Variables
  clientAreas;
  submitClientData: boolean = false;
  pitchData;  

  //User data
  fdmUser;
  userID;
  

  constructor(
    private fb: FormBuilder, 
    private salesService: SalesService, 
    private fire: FirebaseService,
    private authService: AuthenticationService) { }

  @ViewChild('autosize') autosize: CdkTextareaAutosize;


  ngOnInit() {
    this.clientAreas = this.salesService.getPitches();

    this.createForm();
    this.fdmUser =  JSON.parse(localStorage.getItem('fdmUser'));
    //this.fdmUser = this.getfdmUser('ZvqdUOAQCYg0ihz69GVdaa68Lot2');
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
    this.pitchData.firstName = this.fdmUser.firstName;
    this.pitchData.lastName = this.fdmUser.lastName;
    let pitch = this.salesService.generatePitch(this.fdmUser, this.pitchData);

    console.log(pitch);
    
    this.pitchForm = this.fb.group({
      pitch: [pitch]
    }); 
  }

  copyPitch(){
    console.log('copied pitch');
  } 
}
