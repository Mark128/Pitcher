import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { FirebaseService } from 'src/app/Services/firebase.service';
import { switchMap } from 'rxjs/operators';
import { Tech } from 'src/app/data/tech';

@Component({
  selector: 'tech-detail',
  templateUrl: './tech-detail.component.html',
  styleUrls: ['./tech-detail.component.css']
})
export class TechDetailComponent implements OnInit {

  tech;

  constructor(private fb: FirebaseService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    console.log('in tech detail');
    this.route.data.subscribe((data: {tech: Tech}) => {
      this.tech = data.tech;
    });
  } 
  
  goBack(){
    this.router.navigate(['/tech']);
  }
}
