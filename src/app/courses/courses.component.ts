import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { CourseService } from '../services/course.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  allcourses
  constructor(private location: Location, public course: CourseService, private router: Router) { }

  ngOnInit(): void {
    this.course.GetAllCourses().subscribe(res => {
      console.log(res)
      this.allcourses = res
    })
  }
  back() {
    this.location.back(); // <-- go back to previous location on cancel
  }
  gotoCourse(id) {
    console.log(id)
    this.router.navigate(['/coursepage'],{ queryParams: { courseid: id} });

  }

}
