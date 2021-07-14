import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.css']
})
export class TermsComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {
  }
  back() {
    this.location.back(); // <-- go back to previous location on cancel
  }
}
