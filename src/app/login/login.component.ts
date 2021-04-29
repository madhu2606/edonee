import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../services/login.service';

import 'rxjs/add/operator/map';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  isvalid = false
  constructor(
    private login:LoginService,
    private route: ActivatedRoute, 
    private router: Router
  ) { }

 
  loginForm = new FormGroup({
    username: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  });

  Login(){
    
     this.login.Login(this.loginForm.value).subscribe(
    res=>{
       console.log((res));
       if(res['status'] == 200){
          this.router.navigate(['/dashboard']);
       }else{
        this.isvalid = true
        this.loginForm.reset();
       }
      
      },
     error => {
      // this.isValidUser = this.isValidPass = false
      this.isvalid = true
       
      

    }
     );
  }
}
