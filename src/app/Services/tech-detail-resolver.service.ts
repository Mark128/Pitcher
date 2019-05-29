import { Injectable } from '@angular/core';
import { FirebaseService } from './firebase.service';
import { RouterStateSnapshot, Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable, EMPTY, of } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';
import { Tech } from '../data/tech';

@Injectable({
  providedIn: 'root'
})
export class TechDetailResolverService implements Resolve<any> {

  constructor(private fb : FirebaseService,private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Tech> | Observable<never>{
    
    let techName = route.paramMap.get('name');
  
    return this.fb.getTech(techName).pipe(take(1), mergeMap( t => {
        if(t){
          return of (t[0].payload.doc.data())
        }
        else
          return EMPTY;
      
      })
    )
  }
}
