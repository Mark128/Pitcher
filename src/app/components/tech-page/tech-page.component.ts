import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/Services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'tech-page',
  templateUrl: './tech-page.component.html',
  styleUrls: ['./tech-page.component.css']
})
export class TechPageComponent implements OnInit {

  techTerms= [];

  constructor(private fb: FirebaseService, private router:Router) { }

  ngOnInit() {
   this.fb.getAllTech().subscribe( t => {
     this.techTerms = t;
   });
  }

  addNewTechItem(){
    this.router.navigate(['/addTech'])
  }
}
