import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './Services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthenticationService, private router:Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log('route guard activated');
    let url: string = state.url;
    return this.checkLogin(url);
  }

  checkLogin(url: string) : boolean{
    if(this.authService.isLoggedIn) {return true;}

    //Store the attempted URL for redirecting
    this.authService.redirectUrl = url;

    //Navigate to login page with etras
    this.router.navigate(['/signin']);
    return false;
  }
}
