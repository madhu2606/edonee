import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularMaterialModule } from './material/material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BnavComponent } from './bnav/bnav.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { NewsComponent } from './news/news.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursepageComponent } from './coursepage/coursepage.component';
import { SplashComponent } from './splash/splash.component';
import { DatePipe } from '@angular/common';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';


@NgModule({ 
  declarations: [
    AppComponent,
    BnavComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    ProfileComponent,
    NewsComponent,
    CoursesComponent,
    CoursepageComponent,
    SplashComponent,
    ForgotpasswordComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularMaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,

    
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
