import { Component, OnInit, ViewChild } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { SalesService } from '../../Services/sales.service';
import { UserService } from '../../Services/user.service';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import { FirebaseService } from 'src/app/Services/firebase.service';
import { AuthenticationService } from 'src/app/Services/authentication.service';

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

  constructor(
    private fb: FormBuilder, 
    private salesService: SalesService, 
    private fire: FirebaseService,
    private authService: AuthenticationService) { }

  @ViewChild('autosize') autosize: CdkTextareaAutosize;


  ngOnInit() {
    this.clientAreas = this.salesService.areaPitch;
    this.createForm();
    this.user =  this.authService.userData;
    if(this.user)
     this.getUser(this.user.uid);
    //this.getUser('ZvqdUOAQCYg0ihz69GVdaa68Lot2');
  }

  async getUser(uid){
    if(!uid) return;

    this.fire.getFdmUser(uid).subscribe( user => {
        this.user = user[0].payload.doc.data();      
    })      
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
    console.log(JSON.stringify(this.user));
    this.pitch = this.salesService.generatePitch(this.user, this.pitchData);
   
    this.pitchForm = this.fb.group({
      pitch: [this.pitch]
    });
  }

  copyPitch(){
    console.log(this.pitchForm.value.pitch)
  } 
  

}
