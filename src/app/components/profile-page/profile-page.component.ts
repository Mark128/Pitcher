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
  docId;
  currentUser;
  fdmUsers;
  fdmUser;
  fdmUserCopy;
  updatedUser;
  enableEditing : boolean = true;

  constructor(public authService: AuthenticationService, private fb:FirebaseService, private formBuilder: FormBuilder) { }
  @ViewChild('autosize') autosize: CdkTextareaAutosize;
  ngOnInit() {
    this.currentUser = this.authService.userData;
    this.getUser(this.currentUser.uid);
    //this.getUser('ZvqdUOAQCYg0ihz69GVdaa68Lot2');
  }

  async getUser(uid){
    if(!uid) return;

    this.fb.getFdmUser(uid).subscribe( user => {
        this.fdmUser = user[0].payload.doc.data();
        this.fdmUserCopy = this.fdmUser;
        this.docId = user[0].payload.doc.id;
    })      
  }

  getAllUsers(){
    this.fdmUsers = this.fb.getFdmUsers().subscribe(users => console.log(users)); 
  }

  saveUserChanges(profileForm){
    this.fb.editFdmUser(profileForm.value, this.docId);
    this.toggleEdit();
  }

  cancelChanges(){
    this.fdmUser = this.getUser(this.fdmUserCopy.uid);
    this.toggleEdit();
  }

  toggleEdit(){
    this.enableEditing=!this.enableEditing;
  }
}
