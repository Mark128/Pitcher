import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../Services/authentication.service';


@Component({
  selector: 'signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(public authService: AuthenticationService) { }

  ngOnInit() {
  }


}
