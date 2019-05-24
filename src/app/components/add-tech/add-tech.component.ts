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

  public isTrainable = false;

  public isInternal: boolean;
  public isPluralsight: boolean
  public isLinkedin: boolean;

  public internalUrl: string;
  public pluralsightUrl: string;
  public linkedinUrl: string; 
  public submitted = false;

  techCategories = [
    'Development Framework',
    'Development Language',
    'DevOps Tool',
    'Testing Software',
    'Data Science Tool',
    'Business Analysis Framework',
    'Project Management Framework',
    'Application Support Framework',
    'InfoSec Tool'
  ];

  constructor(private fb: FirebaseService) {

  }

  ngOnInit() {
  }
 
  onSubmit(formValues) { 
  
    if(formValues.internalUrl === undefined)
      formValues.internalUrl = 'n/a';
    
    if(formValues.pluralsightUrl === undefined)
      formValues.pluralsightUrl = 'n/a';

    if(formValues.linkedinUrl === undefined)
      formValues.linkedinUrl = 'n/a';


    let newTech = {
      name: formValues.name,
      description: formValues.description,
      logoUrl: formValues.logo,
      category: formValues.category,
      trainable: this.isTrainable,
      training : {
        internal: formValues.internalUrl,
        pluralsight: formValues.pluralsightUrl,
        linkedin: formValues.linkedinUrl
      }
    };

    this.fb.addTech(newTech);
  }

}
