import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { CourseService } from '../services/course.service';

import { LoginService } from '../services/login.service';
declare var $: any;

@Component({
  selector: 'app-forums',
  templateUrl: './forums.component.html',
  styleUrls: ['./forums.component.css']
})
export class ForumsComponent implements OnInit {


  allForums 
  newPost
  replytext
  userdetails 
  constructor(private location: Location, private getService:CourseService, private login:LoginService) { }




  ngOnInit(): void {
    this.userdetails = this.login.getUserDetails();
    this.getAllForums()
   
  }

  getAllForums(){
    this.getService.GetForums().subscribe(res=>{
      this.allForums = res['data']
      console.log(this.allForums)

    })
  }
  back() {
    this.location.back(); // <-- go back to previous location on cancel
  }
  reply(id){
    $('.reply_box').hide()
    document.getElementById(id).style.display = 'block';
  }
  cancelreply(id){
    $('.reply_box').hide()
  }
  createPost(){
console.log(this.newPost)
let body = {
  "name": this.userdetails.data.userName,
  "question": this.newPost,
  "reply": []
}
this.getService.newPost(body).subscribe(res=>{
  console.log(res);
  $('#createModal').modal('hide');
  this.getAllForums()
  this.newPost = '';

})


  }

  postReply(id){
    console.log(this.replytext)
    let body = {
      "request_id": id,
      "name": this.userdetails.data.userName,
      "answer":this.replytext
  
    }
    this.getService.replyPost(body).subscribe(res=>{
      console.log(res);
      this.getAllForums()
      this.replytext = '';
      this.cancelreply(id)
    })
  }
}
