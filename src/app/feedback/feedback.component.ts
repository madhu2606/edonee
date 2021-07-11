import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CourseService } from '../services/course.service';
import { LoginService } from '../services/login.service';
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  userdetails
  constructor(private location: Location,private service:CourseService,private login:LoginService) { }

  ngOnInit(): void {
    this.userdetails = this.login.getUserDetails();
  }
  feedbackform = new FormGroup({
    feedback: new FormControl('',Validators.required),
   
    
  });

  back() {
    this.location.back(); // <-- go back to previous location on cancel
  }
  Addfeedback(){
    let body = {
      "feedback": this.feedbackform.get('feedback').value,
      "name": this.userdetails.data.userName,
      "mobile": this.userdetails.data.mobileNumber,
      "source": "feedback"
   
    }
  this.service.Addadmission(body).subscribe(res=>{
    console.log(res);
    this.feedbackform.reset()
  })
  }
}
