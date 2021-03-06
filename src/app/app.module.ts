import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PitchPageComponent } from './components/pitch-page/pitch-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { SalesService } from './Services/sales.service';
import { UserService } from './Services/user.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatModule } from './mat.module';
import { ClipboardModule } from 'ngx-clipboard';

import { CoreModule } from './core/core.module';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { AuthenticationService } from './Services/authentication.service';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { TechPageComponent } from './components/tech-page/tech-page.component';
import { TechThumbnailComponent } from './components/tech-thumbnail/tech-thumbnail.component';
import { TechDetailComponent } from './components/tech-detail/tech-detail.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AddTechComponent } from './components/add-tech/add-tech.component';
import { DialogService } from './Services/dialog.service';
import { CanDeactivateGuard } from './can-deactivate.guard';
import { AuthGuard } from './auth.guard';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PitchPageComponent,
    ProfilePageComponent,
    SignupComponent,
    SigninComponent,
    VerifyEmailComponent,
    ForgotPasswordComponent,
    WelcomeComponent,
    TechPageComponent,
    TechThumbnailComponent,
    TechDetailComponent,
    AddTechComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatModule,
    ClipboardModule,
    CoreModule,
    AngularFontAwesomeModule
  ],
  providers: [
    SalesService,
    UserService,
    AuthenticationService,
    CanDeactivateGuard,
    AuthGuard,
    DialogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
