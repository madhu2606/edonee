import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdmissionsComponent } from './admissions/admissions.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CoursepageComponent } from './coursepage/coursepage.component';
import { CoursesComponent } from './courses/courses.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ForumsComponent } from './forums/forums.component';
import { LoginComponent } from './login/login.component';
import { NewsComponent } from './news/news.component';
import { PassComponent } from './pass/pass.component';
import { ProfileComponent } from './profile/profile.component';
import { ReferComponent } from './refer/refer.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuardService } from './services/auth-guard.service';
import {SplashComponent  } from './splash/splash.component';
import { TermsComponent } from './terms/terms.component';


const routes: Routes = [
  {
    path:'',
    component:SplashComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent,
    canActivate:[AuthGuardService]
  },
  {
    path:'profile',
    component:ProfileComponent,
    canActivate:[AuthGuardService]
  },
  {
    path:'news',
    component:NewsComponent
  },
  {
    path:'courses',
    component:CoursesComponent
  },
  {
    path:'coursepage',
    component:CoursepageComponent
  },
  {
    path:'forgotpass',
    component:ForgotpasswordComponent
  },
  {
    path:'aboutus',
    component:AboutUsComponent
  },
  {
    path:'contactus',
    component:ContactUsComponent
  },
  {
    path:'admissions',
    component:AdmissionsComponent
  },
  {
    path:'feedback',
    component:FeedbackComponent
  },
  {
    path:'pass',
    component:PassComponent
  },
  {
    path:'forum',
    component:ForumsComponent
  },
  {
    path:'terms',
    component:TermsComponent
  },
  {
    path:'refer',
    component:ReferComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
