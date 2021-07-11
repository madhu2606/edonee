import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
contact
  constructor(private location:Location,private service:CourseService) { }

  ngOnInit(): void {
    this.service.GetContact().subscribe(res=>{
      console.log(res)
      this.contact = res
    })
  }
  back() {
    this.location.back(); // <-- go back to previous location on cancel
  }
}
