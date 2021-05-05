import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursepageComponent } from './coursepage/coursepage.component';
import { CoursesComponent } from './courses/courses.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { LoginComponent } from './login/login.component';
import { NewsComponent } from './news/news.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuardService } from './services/auth-guard.service';
import {SplashComponent  } from './splash/splash.component';


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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
