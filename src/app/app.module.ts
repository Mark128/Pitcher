import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PitchPageComponent } from './components/pitch-page/pitch-page.component';
import { NavbarComponent } from './navbar/navbar.component';
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



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PitchPageComponent,
    ProfilePageComponent,
    SignupComponent,
    SigninComponent,
    VerifyEmailComponent,
    ForgotPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatModule,
    ClipboardModule,
    CoreModule    
  ],
  providers: [
    SalesService,
    UserService,
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
