import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';
import { CourseService } from '../services/course.service';
import { Location } from '@angular/common';
import { LoginService } from '../services/login.service';
import { environment } from 'src/environments/environment.prod';



@Component({
  selector: 'app-coursepage',
  templateUrl: './coursepage.component.html',
  styleUrls: ['./coursepage.component.css']
})
export class CoursepageComponent implements OnInit {

  constructor(private route: ActivatedRoute,public course: CourseService,private location: Location,private login: LoginService) { }
courseid 
coursevideos
userdetails
videoURL = '#'

registermsg
  ngOnInit(): void {
     this.userdetails = this.login.getUserDetails();
    this.route.queryParams
      .filter(params => params.courseid)
      .subscribe(params => {
        console.log(params); // { order: "popular" }
        this.courseid = params.courseid;
        this.getCourseVideos(this.courseid)
      }
    );
  }
  back() {
     // <-- go back to previous location on cancel
    let lstVid = {
    "emailId": this.userdetails.emailId,
    "last_viewed": {
        "course_id": this.coursevideos.course_id,
        "subject": this.coursevideos.subject,
        "shortDescription": this.coursevideos.shortDescription,
        "tutor":this.coursevideos.tutor,
        "imageUrl": this.coursevideos.imageUrl,
        "video_tile": this.coursevideos.video_tile,
        "type": this.coursevideos.type       
    },
    "recommended_courses": [this.coursevideos.course_id]

  }
// this.location.back();
console.log(lstVid)
  this.course.UpdateLastCourse(lstVid).subscribe(res=>{
    console.log(res)
     this.location.back();

  })


  }
  getCourseVideos(id){
      this.course.GetCourseIndiv(id).subscribe(res=>{
        console.log(res);
        this.coursevideos = res[0]
      })
  }
  getVideo(vid){
   let tempid = []
  //  console.log(this.userdetails)
   if(this.userdetails.data.hasOwnProperty("subscriptions")){
    this.userdetails.data.subscriptions.forEach(e => {
      // console.log(e)
       tempid .push(e.course_id) 
     });
   }
    // console.log(vid)
    // console.log(tempid)
    if(tempid.includes(this.courseid) ){
      this.registermsg = ''
      this.videoURL = environment.url.allcourses+"/"+this.courseid+"/"+vid+"?token="+localStorage.getItem('token')
    }else{
      this.registermsg = "Please subscribe for the course"
    }
   
  }
}