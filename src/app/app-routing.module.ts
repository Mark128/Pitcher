import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PitchPageComponent } from './components/pitch-page/pitch-page.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';

const routes: Routes = [
  { path: 'pitch', component: PitchPageComponent },
  { path: 'profile', component: ProfilePageComponent},
  { path: 'signin', component: SigninComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'forgot-password', component: ForgotPasswordComponent},
  { path: 'verify-email', component: VerifyEmailComponent},
  { path: '', redirectTo: "/pitch", pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
