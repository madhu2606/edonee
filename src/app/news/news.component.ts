import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {
  }
  back() {
    this.location.back(); // <-- go back to previous location on cancel
  }
}
