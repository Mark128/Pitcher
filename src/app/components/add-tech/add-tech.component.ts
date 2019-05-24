import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/Services/firebase.service';

@Component({
  selector: 'add-tech',
  templateUrl: './add-tech.component.html',
  styleUrls: ['./add-tech.component.css']
})
export class AddTechComponent implements OnInit {

  public techName: string;
  public description: string;
  public category: string;
  public logoUrl: string;

  public isTrainable: boolean;

  public isInternal: boolean;
  public isPluralsight: boolean
  public isLinkedin: boolean;

  public internalUrl: string;
  public pluralsightUrl: string;
  public linkedinUrl: string; 
  submitted = false;

  techCategories = [
    'Development Framework',
    'Development Language',
    'DevOps Tool',
    'Testing Software',
    'Data Science Tool',
    'Business Analysis Framework',
    'Project Management Framework',
    'Application Support Framework'
  ];

  constructor(private fb: FirebaseService) { }

  ngOnInit() {
  }
 
  onSubmit(formValues) { 
    console.log(formValues);
  }

}
