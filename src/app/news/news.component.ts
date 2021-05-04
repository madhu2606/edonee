import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
newsList 
  constructor(private location: Location, private news:CourseService) { }

  ngOnInit(): void {
    this.news.GetNews().subscribe(res=>{
      console.log(res)
      this.newsList = res

    })
  }
  back() {
    this.location.back(); // <-- go back to previous location on cancel
  }
}
