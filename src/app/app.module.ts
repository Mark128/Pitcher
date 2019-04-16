import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PitchPageComponent } from './pitch-page/pitch-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import {ReactiveFormsModule} from '@angular/forms';
import { SalesService } from './Services/sales.service';
import { UserService } from './Services/user.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatModule } from './mat.module';
import { ClipboardModule } from 'ngx-clipboard';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PitchPageComponent,
    ProfilePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatModule,
    ClipboardModule
  ],
  providers: [
    SalesService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
