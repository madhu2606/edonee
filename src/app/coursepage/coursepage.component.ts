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
  styleUrls: ['./coursepage.component.css'],
})
export class CoursepageComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    public course: CourseService,
    private location: Location,
    private login: LoginService
  ) {}
  courseid;
  coursevideos;
  userdetails;
  videoURL = '#';
  vid;
  tosubscribe = false;

  registermsg;
  ngOnInit(): void {
    this.userdetails = this.login.getUserDetails();
    this.route.queryParams
      .filter((params) => params.courseid)
      .subscribe((params) => {
        console.log(params); // { order: "popular" }
        this.courseid = params.courseid;
        this.getCourseVideos(this.courseid);
      });
  }
  back() {
    // <-- go back to previous location on cancel
    let lstVid = {
      emailId: this.userdetails.emailId,
      last_viewed: {
        course_id: this.coursevideos.course_id,
        subject: this.coursevideos.subject,
        shortDescription: this.coursevideos.shortDescription,
        tutor: this.coursevideos.tutor,
        imageUrl: this.coursevideos.imageUrl,
        video_tile: this.coursevideos.video_tile,
        type: this.coursevideos.type,
      },
      recommended_courses: [this.coursevideos.course_id],
    };
    // this.location.back();
    console.log(lstVid);
    this.course.UpdateLastCourse(lstVid).subscribe((res) => {
      console.log(res);
      this.location.back();
    });
  }
  getCourseVideos(id) {
    this.course.GetCourseIndiv(id).subscribe((res) => {
      console.log(res);
      this.coursevideos = res[0];

      this.getVideo(this.coursevideos.CourseList[0].videoURL);
      this.isEnabled(this.coursevideos.CourseList[0].videoURL);
    });
  }
  getVideo(vid) {
    let tempid = [];
    this.vid = vid;
    //  console.log(this.userdetails)
    if (this.userdetails.data.hasOwnProperty('subscriptions')) {
      this.userdetails.data.subscriptions.forEach((e) => {
        // console.log(e)
        tempid.push(e.course_id);
      });
    }
    // console.log(vid)
    // console.log(tempid)
    if (tempid.includes(this.courseid)) {
      this.registermsg = '';
      this.videoURL =
        environment.url.allcourses +
        '/' +
        this.courseid +
        '/' +
        vid +
        '?token=' +
        localStorage.getItem('token');
      this.tosubscribe = false;
    } else {
      this.registermsg = 'Please subscribe for the course';
      this.tosubscribe = true;
    }
  }

  isEnabled(id) {
    return this.vid === id;
  }

  subscr(id) {
    console.log(id);
    let temp = {
      subscriptionId: 'dev_coding_01',
      subscriptionName: 'Building Apps',
      subscriptionPrice: 300,
      active: 1,
      subscriptionValidity: '999 Days',
      subscriptionValidityLimit: 999,
      subscriptionDescription: 'In app purchase',
      subscriptionRecommended: true,
      course_id: id,
    };

    this.course.Addsubscription(temp).subscribe((res) => {
      console.log(res);
      if(this.userdetails.data.hasOwnProperty('subscriptions')){

        this.userdetails.data.subscriptions.push(temp)
      }else{
        this.userdetails.data.subscriptions = []
        this.userdetails.data.subscriptions.push(temp)
      }
      this.getVideo(this.coursevideos.CourseList[0].videoURL);
      this.isEnabled(this.coursevideos.CourseList[0].videoURL);
    });
  }
}
