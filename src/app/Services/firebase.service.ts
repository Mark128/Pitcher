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
    //('users', ref => { return ref.orderBy('firstName', 'desc').limit
    // }); -- for ordering

    this.fdmUsers = this.fdmUsersCollection.valueChanges(); // observable of fdmUsers data
    return this.fdmUsers;
  }

  getFdmUser(uid){
    this.fdmUsersCollection = this.afs.collection('fdmUsers', ref => {
      return ref.where('uid', '==', uid)
    });

    this.fdmUser = this.fdmUsersCollection.valueChanges();
    return this.fdmUser;
  }

  editFdmUser(user){
    let docId;
    this.fdmUsersCollection = this.afs.collection('fdmUsers')
    this.snapshot = this.fdmUsersCollection.snapshotChanges()
    .pipe(map(arr => {
        docId = arr.map(snap => snap.payload.doc.id);
      }));
    
    this.fdmUserDoc = this.afs.doc(`fdmUsers/${docId}`)
    //this.updatedUser = this.fdmUserDoc.valueChanges();
    this.fdmUserDoc.update(user);
  

  }
}
