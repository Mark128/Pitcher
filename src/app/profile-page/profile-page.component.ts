import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../Services/authentication.service';
import { FirebaseService } from '../Services/firebase.service';
import { FdmUser } from '../data/fdmUser';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  currentUser;
  fdmUsers;
  fdmUser;
  updatedUser;
  enableEditing : boolean = false;

  constructor(public authService: AuthenticationService, private fb:FirebaseService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.currentUser = this.authService.userData;
    //this.getUser(this.currentUser.uid);
    this.getUser('ZvqdUOAQCYg0ihz69GVdaa68Lot2');
  }

  getUser(uid){
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
}
