import { Component, OnInit, ViewChild } from '@angular/core';
import { FirebaseService } from 'src/app/Services/firebase.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DialogService } from 'src/app/Services/dialog.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'add-tech',
  templateUrl: './add-tech.component.html',
  styleUrls: ['./add-tech.component.css']
})
export class AddTechComponent implements OnInit {

  @ViewChild('techForm') public techForm: NgForm;

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

  constructor(private fb: FirebaseService, private router: Router, private dialogService: DialogService) {

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
    this.router.navigate(['/tech']);
  }

  cancel(){
    this.router.navigate(['/tech']);
  }

  canDeactivate(): Observable<boolean> | boolean {
    // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged
    if (!this.techForm.dirty) {
      return true;
    }
    // Otherwise ask the user with the dialog service and return its
    // observable which resolves to true or false when the user decides
    return this.dialogService.confirm('Are you sure you want to cancel?');
  }

}
