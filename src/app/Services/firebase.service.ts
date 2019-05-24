import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore'
import {FdmUser} from '../data/fdmUser';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  fdmUsersCollection: AngularFirestoreCollection<FdmUser>;
  fdmUsers: Observable<FdmUser[]>;
  fdmUser:Observable<FdmUser[]>;
  fdmUserDoc: AngularFirestoreDocument<FdmUser>;
  updatedUser: Observable<FdmUser>;
  snapshot: any;
  pitchesCollection: AngularFirestoreCollection<any>;
  pitches: any;
  techCollection: AngularFirestoreCollection<any>;
  tech: any;

  constructor(private afs: AngularFirestore) { }

  getFdmUsers(){
    this.fdmUsersCollection = this.afs.collection('fdmUsers'); //reference to DB collection
    this.fdmUsers = this.fdmUsersCollection.valueChanges(); // observable of fdmUsers data
    return this.fdmUsers;
  }

  getFdmUser(uid){
    this.fdmUsersCollection = this.afs.collection('fdmUsers', ref => {
      return ref.where('uid', '==', uid)
    });

    return this.fdmUsersCollection.snapshotChanges();
  }

  editFdmUser(user, docId){   
    this.afs.collection('fdmUsers').doc(docId).set(
      {
        email: user.email,
        title: user.title,
        pitchSalutation: user.pitchSalutation,
        pichIntro: user.pitchIntro,
        pitchStart: user.pitchStart,
        pitchConclusion: user.pitchConclusion,
        pitchFinal: user.pitchFinal
      }, {merge: true});   
  }

  getPitches(){
    this.pitchesCollection = this.afs.collection('pitches'); //reference to DB collection
    this.pitches = this.pitchesCollection.valueChanges(); 
    return this.pitches;
  }

  getAllTech(){
    this.techCollection = this.afs.collection('tech'); //reference to DB collection
    this.tech = this.techCollection.valueChanges(); // observable of fdmUsers data
    return this.tech;
  }

  getTech(name){
    this.techCollection = this.afs.collection('tech', ref => {
      return ref.where('name', '==', name)
    });

    return this.techCollection.snapshotChanges();
  }

  addTech(tech){
    
    this.afs.collection('tech').add(tech);
  }

}
