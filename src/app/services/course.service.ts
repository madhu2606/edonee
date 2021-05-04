import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { JwtHelperService } from "@auth0/angular-jwt";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
   headerDict = {
    'Content-Type': 'application/json',
    'authorization': 'Bearer '+localStorage.getItem('token')

  }
  
   requestOptions = {                                                                                                                                                                                 
    headers: new HttpHeaders(this.headerDict), 
  };

  constructor( public http:HttpClient, private router: Router) { }

  GetAllCourses(){
    return this.http.get(environment.url.allcourses).map(
      res=>{
      console.log(res)
      if(res['success'] == true){
        return res['data']
      }else{
        return {}
      }
      
    });
  }


  GetCourseIndiv(id){
    return this.http.get(environment.url.allcourses+"/"+id,this.requestOptions).map(res=>{
      console.log(res)
      // return res
      if(res['success'] == true){
        return res['data']
      }else{
        // error: {message: "jwt expired"}
        if(res['error']['message'] == "jwt expired"){
          localStorage.removeItem('token')
          this.router.navigate(['']);
          
        }else{
          return {}
        }
      }
    })
  }
  GetVideoIndiv(id,vid){
    return this.http.get(environment.url.allcourses+"/"+id+"/"+vid+"?token="+localStorage.getItem('token'),this.requestOptions).map(res=>{
      // console.log(res)
      return res
      // if(res['success'] == true){
      //   return res['data']
      // }else{
      //   // error: {message: "jwt expired"}
      //   if(res['error']['message'] == "jwt expired"){
      //     localStorage.removeItem('token')
      //     this.router.navigate(['']);
          
      //   }else{
      //     return {}
      //   }
      // }
    })
  }
  GetRecomendedCourses(data){
    return this.http.post(environment.url.recomendedcourses,data,this.requestOptions).map(res=>{
      // console.log(res)
      return res
     
    })
  }
  UpdateLastCourse(lstVid){
    return this.http.post(environment.url.updatelastCourse,lstVid,this.requestOptions).map(res=>{
      console.log(res)
      return res
     
    })
  }
  GetLastCourses(data){
    return this.http.post(environment.url.lastcourse,data,this.requestOptions).map(res=>{
      // console.log(res)
     if(res['success'] == true){
        return res['data']
      }else{
        // error: {message: "jwt expired"}
        if(res['error']['message'] == "jwt expired"){
          localStorage.removeItem('token')
          this.router.navigate(['']);
          
        }else{
          return {}
        }
      }
    })
  }

  Addsubscription(data){
    return this.http.post(environment.url.subscribe,data,this.requestOptions).map(res=>{
      console.log(res)
      return res
    })
  }


  GetNews(){
    return this.http.get(environment.url.news,this.requestOptions).map(res=>{
      console.log(res)
      return res
      // if(res['success'] == true){
      //   return res['data']
      // }else{
      //   // error: {message: "jwt expired"}
      //   if(res['error']['message'] == "jwt expired"){
      //     localStorage.removeItem('token')
      //     this.router.navigate(['']);
          
      //   }else{
      //     return {}
      //   }
      // }
    })
  }

}
