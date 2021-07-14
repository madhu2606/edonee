import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CourseService } from '../services/course.service';
declare var $: any;

@Component({
  selector: 'app-admissions',
  templateUrl: './admissions.component.html',
  styleUrls: ['./admissions.component.css']
})
export class AdmissionsComponent implements OnInit {

  constructor(private location: Location,private service:CourseService) { }

  ngOnInit(): void {
  }

  admissionform = new FormGroup({
    name: new FormControl('',Validators.required),
    father_name: new FormControl('',Validators.required),
    mother_name: new FormControl('',Validators.required),
    dob: new FormControl('',Validators.required),
    email_id: new FormControl('',Validators.required),
    graduation: new FormControl('',Validators.required),
    mobile: new FormControl('',Validators.required),
    preferred_colleges: new FormControl('',Validators.required),
    gender: new FormControl('',Validators.required),
    course_preferred: new FormControl('',Validators.required),
    occupation: new FormControl('',Validators.required),
    address: new FormControl('',Validators.required),
    
  });
  


  back() {
    this.location.back(); // <-- go back to previous location on cancel
  }
  Addadmision(){
    $('#myModal').modal('show');
    if(this.admissionform.valid){
      this.service.Addadmission(this.admissionform.value).subscribe(res=>{
        console.log(res);
        this.admissionform.reset()
      })
      console.log(this.admissionform.value)
    }
   

  }
}
