import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { JwtHelperService } from "@auth0/angular-jwt";


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  headerDict = {
    'Content-Type': 'application/json',
    'authorization': 'Bearer '+localStorage.getItem('token')

  }
  
   requestOptions = {                                                                                                                                                                                 
    headers: new HttpHeaders(this.headerDict), 
  };
  constructor(
    public http:HttpClient
  ) { }

  Login(data){
    console.log(data);
    return this.http.post(environment.url.login,data,{observe: 'response'}).map(
      res=>{
      // console.log(res)
        if(res.body['success'] == true){
          localStorage.setItem("token",res.body["token"]);
          
          return {'status':200,'error':'','sucess':'true','token':res.body["token"]}
        }
        else{
          let err = res.body["error"]["message"]
          return {'status':400,'error':err,'sucess':'false'}
  
        }
    },
    error =>{
      console.log("from error")
      console.log(error)
      let err = error.body["error"]["message"]
      return {'status':400,'error':err,'sucess':'false'}

    })

  }

  Register(data){
    return this.http.post(environment.url.register,data,{observe: 'response'}).map(
      res=>{
      // console.log(res)
      return res.body
      
    });
  }

  getUserDetails(){
    let helper = new JwtHelperService();
    let token = localStorage.getItem('token');
    let decoded= helper.decodeToken(token);
    return decoded
  //  helper.isTokenExpired(token)
    

  }

  UpdateProfile(data){
    return this.http.post(environment.url.profile,data,this.requestOptions).map(
      res=>{
      console.log(res)
      return res
      
    });
  }

}
