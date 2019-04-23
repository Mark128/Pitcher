import { Injectable } from '@angular/core';

export interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  emailVerified: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUser = {
    firstName: 'Mark',
    lastName: 'Antoniadis',
    title: 'Service Delivery Manager',
    salutation: 'Hi',
    intro: 
    `I Hope this finds you well.

I’d like to introduce myself and FDM. We have a unique business model in which we partner with local universities, take in fresh graduate talent and train them in business and technology, deploying them with our clients afterwards and supporting the initial stages of their careers in IT.`,
    pitchStart: 'I noticed you are the',
    conclusion: 'Is there a time next week that would work for you to discuss how our program can offer value in building a secure and flexible pipeline of local talent for your teams?',
    final: 'Thanks,'
  };

  constructor() { }

  getCurrentUser(){
    return this.currentUser;
  }

}
