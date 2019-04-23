import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthenticationService } from '../../Services/authentication.service';
import { FirebaseService } from '../../Services/firebase.service';
import { FdmUser } from '../../data/fdmUser';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';

@Component({
  selector: 'profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  profileForm: FormGroup;
  currentUser;
  fdmUsers;
  fdmUser;
  updatedUser;
  enableEditing : boolean = true;

  constructor(public authService: AuthenticationService, private fb:FirebaseService, private formBuilder: FormBuilder) { }
  @ViewChild('autosize') autosize: CdkTextareaAutosize;
  ngOnInit() {
    this.currentUser = this.authService.userData;
    //this.getUser(this.currentUser.uid);
    this.getUser('ZvqdUOAQCYg0ihz69GVdaa68Lot2');
    this.createForm();
  }

  async getUser(uid){
    if(!uid) return;
    this.fb.getFdmUser(uid).subscribe( user => {
        this.fdmUser = user[0];
        console.log(this.fdmUser);
    })      
  }

  getAllUsers(){
    this.fdmUsers = this.fb.getFdmUsers().subscribe(users => console.log(users)); 
  }

  editUserInfo(fdmUser){
    this.fb.editFdmUser(fdmUser);
  }

  saveUserChanges(){

  }

  cancelChanges(){

  }

  toggleEdit(){
    this.enableEditing=!this.enableEditing;
  }

  async createForm(){
    await this.getUser;
    this.profileForm  = this.formBuilder.group({
      firstName: [''],
     /*  lastName: [this.fdmUser.lastName],
      title: [this.fdmUser.title],
      email: [this.fdmUser.email],
      pitchSalutation: [this.fdmUser.pitchSalutation],
      pitchIntro: [this.fdmUser.pitchIntro],
      pitchStart: [this.fdmUser.pitchStart],
      pitchConclusion: [this.fdmUser.pitchConclusion],
      pitchFinal: [this.fdmUser.pitchFinal]     */
    });   
  }

  // convenience getter for easy access to form fields
 // get pf() { return this.profileForm.controls; }
}
