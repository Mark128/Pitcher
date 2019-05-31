import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../Services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  navbarOpen = false;

  constructor(public authService: AuthenticationService) { }

  ngOnInit() {
  }  

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

}
