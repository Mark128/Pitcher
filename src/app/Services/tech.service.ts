import { Injectable } from '@angular/core';
import { FirebaseService } from './firebase.service';
import { fbind } from 'q';

@Injectable({
  providedIn: 'root'
})
export class TechService {

  constructor(private fb: FirebaseService) { }

 
}
