import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Services/authentication.service';

@Component({
  selector: 'welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  fdmUser;
  constructor(private router: Router, private authService: AuthenticationService) { }

  ngOnInit() {
    this.fdmUser =  JSON.parse(localStorage.getItem('fdmUser'));
  }

  goToProfile(){
    this.router.navigate(['/profile']);
  }

  goToPitch(){
    this.router.navigate(['/pitch']);
  }

  goToTechTerms(){
    this.router.navigate(['/tech']);
  }
}
