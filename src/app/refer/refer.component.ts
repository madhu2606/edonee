import { Component, OnInit, TestabilityRegistry } from '@angular/core';
import { Location } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-refer',
  templateUrl: './refer.component.html',
  styleUrls: ['./refer.component.css']
})
export class ReferComponent implements OnInit {
code 
refDone = localStorage.getItem('refDone') !=null?false:true
  constructor(private location: Location,private getService:CourseService) { }

  ngOnInit(): void {
  }
  back() {
    this.location.back(); // <-- go back to previous location on cancel
  }
  sendCode(){
    let data = {
      code:this.code
    }
      this.getService.SendCode(data).subscribe(res=>{
        console.log(res)
        localStorage.setItem('refDone','true')
        this.refDone = true
      })
  }

}
