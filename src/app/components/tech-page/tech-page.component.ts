import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/Services/firebase.service';

@Component({
  selector: 'tech-page',
  templateUrl: './tech-page.component.html',
  styleUrls: ['./tech-page.component.css']
})
export class TechPageComponent implements OnInit {

  techTerms= [];

  constructor(private fb: FirebaseService) { }

  ngOnInit() {
   this.fb.getAllTech().subscribe( t => {
     this.techTerms = t;
   });
  }

}
