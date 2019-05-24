import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { FirebaseService } from 'src/app/Services/firebase.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'tech-detail',
  templateUrl: './tech-detail.component.html',
  styleUrls: ['./tech-detail.component.css']
})
export class TechDetailComponent implements OnInit {

  tech;

  constructor(private fb: FirebaseService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let techName = params["name"];
      this.fb.getTech(techName).subscribe(t => {
        console.log(t[0].payload.doc.data());
        this.tech = t[0].payload.doc.data();
      })
    });
  } 
  
  goBack(){
    this.router.navigate(['/tech']);
  }
}
