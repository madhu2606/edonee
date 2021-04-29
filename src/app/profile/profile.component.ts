import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { formatDate } from '@angular/common' 



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userdetails
  constructor(private location: Location,private login:LoginService) { }

  ngOnInit(): void {
    this.userdetails = this.login.getUserDetails();
    this.profileform.get('name').setValue(this.userdetails.data.userName)
    this.profileform.get('username').setValue(this.userdetails.data.emailId)
    this.profileform.get('mobile').setValue(this.userdetails.data.mobileNumber)
    this.profileform.get('refcode').setValue(this.userdetails.data.refer_earn)
    // this.profileform.get('dob').setValue((this.userdetails.data.dob,'dd-mm-yyy','en'))
    this.profileform.get('age').setValue(this.userdetails.data.age)
    this.profileform.get('gender').setValue(this.userdetails.data.gender)
    this.profileform.get('street').setValue(this.userdetails.data.street)
    this.profileform.get('state').setValue(this.userdetails.data.state)
    this.profileform.get('country').setValue(this.userdetails.data.country)
    this.profileform.get('college').setValue(this.userdetails.data.college)
    this.profileform.get('course').setValue(this.userdetails.data.course)
    // console.log(this.userdetails)
      }
  profileform = new FormGroup({
    name: new FormControl('',Validators.required),
    username: new FormControl('',Validators.required),
    mobile: new FormControl('',Validators.required),
    college: new FormControl('',Validators.required),
    course: new FormControl('',Validators.required),
    refcode: new FormControl('',Validators.required),
    dob: new FormControl('',Validators.required),
    age: new FormControl('',Validators.required),
    gender: new FormControl('',Validators.required),
    street: new FormControl('',Validators.required),
    state: new FormControl('',Validators.required),
    country: new FormControl('',Validators.required)
  });
  // "active" : 1,
  // "age" : 24,
  // "country" : "India",
  // "emailId" : "nagamothunagarjuna@gmail.com",
  // "gender" : "M",
  // "hashKey" : "admin@123",
  // "mobileNumber" : "9704032469",
  // "userName" : "arjun"   
  back() {
    this.location.back(); // <-- go back to previous location on cancel
  }

  updateProfie(){
    console.log(this.profileform.value)
    let t = this.profileform.value
    let temp = {
      "set": {
          "gender" : t.gender,
          "age":t.age,
          "college":t.college,
          "course":t.course,
          "dob":t.dob,
          "street":t.street,
          "state":t.state,
          "refer_earn": t.refcode
         

      }
  }
  console.log(temp)
  this.login.UpdateProfile(temp).subscribe(res=>{
    console.log(res);
  })
  
  }
}
