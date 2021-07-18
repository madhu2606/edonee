import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from '../services/course.service';
import { LoginService } from '../services/login.service';
import { Plugins } from '@capacitor/core';

import { DatePipe } from '@angular/common'
const { Share } = Plugins;
declare var $: any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userdetails
  allcourses
  lastCourse =[]
  RecomCourse 
  isbday = false
  showMenu = false
  slideIndex = 0;
  bn1=true;
  bn2 = false;
  constructor(private login: LoginService, public course: CourseService, private router: Router,private datePipe: DatePipe) { }

  ngOnInit(): void {
    // this.showSlides();
    
    setInterval(()=>{                           // <<<---using ()=> syntax
      this.showSlides()
  }, 2000);
    this.userdetails = this.login.getUserDetails();
    if(this.userdetails.data.hasOwnProperty('dob')){
      let date=new Date();
      let latest_date =this.datePipe.transform(date, 'yyyy-MM-dd');
      if(this.userdetails.data.dob == latest_date){
        this.isbday = true
      }else{
        this.isbday = false
      }
    }
    console.log(this.userdetails)
    this.course.GetAllCourses().subscribe(res => {
      console.log(res)
      this.allcourses = res
    })
   
  let lstemail = {
    "emailId": this.userdetails.emailId
  }
  
  this.course.GetLastCourses(lstemail).subscribe(res=>{
    this.lastCourse = res
   console.log(this.lastCourse)
   let rec = {}
   if(this.lastCourse.length !=0){
   rec = {
      "course_id": this.lastCourse[0].last_viewed.course_id
    }
  
   }else{
      rec = {
      "course_id": ""
    }
   }
   this.course.GetRecomendedCourses(rec).subscribe(res=>{
    this.RecomCourse = res
    console.log(this.RecomCourse)
  })
   
  })
    

  }

  gotoCourse(id) {
    console.log(id)
    this.router.navigate(['/coursepage'],{ queryParams: { courseid: id} });

  }

  share(){
    let shareRet =  Share.share({
  title: 'Edonee Refer and Earn',
  text: 'Share and Earn',
  url: 'http://edonee.com/refer/'+this.userdetails.data.refer_earn
});
  }

  logout(){
    localStorage.removeItem('token')
    this.router.navigate([''])
  }

  

		 showSlides() {
      // console.log(this.bn1,this.bn2)
              this.bn1 = !this.bn1
              this.bn2 = !this.bn2
              // console.log(this.bn1,this.bn2)
					}
    

}
