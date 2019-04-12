import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PitchPageComponent } from './pitch-page/pitch-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';

const routes: Routes = [
  { path: 'pitch', component: PitchPageComponent },
  { path: 'profile', component: ProfilePageComponent},
  { path: '', redirectTo: "/pitch", pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
