import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {
  msg = ''
  shwmsg = false
  constructor(
    private login:LoginService,
    private route: ActivatedRoute, 
    private router: Router
  ) { }

    
  RegisterForm = new FormGroup({
    email: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
    name: new FormControl('',Validators.required),
    mobile: new FormControl('',Validators.required),
  });

  Register(){
      console.log(this.RegisterForm.value)
      let temp = {
        "active" : 1,
        "age" : 0,
        "country" : "India",
        "emailId" : this.RegisterForm.value.email,
        "gender" : "",
        "hashKey" : this.RegisterForm.value.password,
        "mobileNumber" : this.RegisterForm.value.mobile,
        "userName" : this.RegisterForm.value.name   
    }
    console.log(temp)
     this.login.Register(temp).subscribe(
    res=>{
      // console.log(res)
        if(res['success'] == true){
          this.msg = res['data']['message']
        }else{
          this.msg = res['error']['message']
          
        }
        this.shwmsg = true
        this.RegisterForm.reset
    //   {
    //     "success": false,
    //     "error": {
    //         "message": "A user with that username already Exists!"
    //     }
    // }
  //   {
  //     "success": true,
  //     "data": {
  //         "tokenId": "60869b8da152a86a68618693",
  //         "message": "A profile with the provided details has been created. Now please login!"
  //     }
  // }
       
       
   
      });

  }

}
