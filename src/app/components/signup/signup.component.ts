import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Services/user.service';
import { AuthenticationService } from '../../Services/authentication.service';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public authService: AuthenticationService) { }

  ngOnInit() {
  }

}
