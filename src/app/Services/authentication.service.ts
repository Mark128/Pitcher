import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { auth } from 'firebase/app';
import {User} from '../Services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  userData: any;
  
  constructor(
    public afs: AngularFirestore,   // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,  
    public ngZone: NgZone // NgZone service to remove outside scope warning
  ) 
  { 
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    })
  }

  // Sign in with email/password
  SignIn(email, password) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
    .then((result) => {
      this.ngZone.run(() => {
      this.router.navigate(['/profile']);
    });
      this.SetUserData(result.user);
    }).catch((error) => {
      window.alert(error.message)
    })
  }

  // Sign up with email/password
  SignUp(email, password) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
    .then((result) => {
      /* Call the SendVerificaitonMail() function when new user sign 
      up and returns promise */
      this.SendVerificationMail();
      this.SetUserData(result.user);
    }).catch((error) => {
      window.alert(error.message)
    })
  }

  // Send email verfificaiton when new user sign up
  SendVerificationMail() {
    return this.afAuth.auth.currentUser.sendEmailVerification()
    .then(() => {
     this.router.navigate(['signin']);
    })
  }

  // Reset Forggot password
  ForgotPassword(passwordResetEmail) {
    return this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail)
    .then(() => {
      window.alert('Password reset email sent, check your inbox.');
    }).catch((error) => {
      window.alert(error)
    })
  }

  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null) ? true : false;
  }


  // Auth logic to run auth providers
  AuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
    .then((result) => {
      this.ngZone.run(() => {
      this.router.navigate(['/']);
    })
      this.SetUserData(result.user);
    }).catch((error) => {
       window.alert(error)
    })
  }


  /* Setting up user data when sign in with username/password, 
  sign up with username/password and sign in with social auth  
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  SetUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified
    }

    var first = user.email.split('.');
    var last = (first[1].split('@')); 

    const fdmUserData = {
      uid: user.uid,
      firstName: first[0],
      lastName: last[0],
      title: 'N/A',
      email: user.email,
      pitchIntro: 'I Hope this finds you well.  I’d like to introduce myself and FDM. We have a unique business model in which we partner with local universities, take in fresh graduate talent and train them in business and technology, deploying them with our clients afterwards and supporting the initial stages of their careers in IT.',
      pitchConclusion: 'Is there a time next week that would work for you to discuss how our program can offer value in building a secure and flexible pipeline of local talent for your teams?',
      pitchFinal: 'Thanks,',
      pitchSalutation: 'Hello',
      pitchStart: 'I noticed you are the'
    };

    new Promise<any>((resolve, reject) => {
      this.afs.collection('fdmUsers')
      .add(fdmUserData)
      .then(res => {}, err => reject(err));
    }); 
  
    return userRef.set(userData, {
      merge: true
    })   
  }

  // Sign out 
  SignOut() {
    return this.afAuth.auth.signOut().then(() => {
      localStorage.removeItem('user');
     this.router.navigate(['signin']);
    })
  }
}
