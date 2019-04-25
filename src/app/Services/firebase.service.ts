import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore'
import { map } from "rxjs/operators";
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
}
