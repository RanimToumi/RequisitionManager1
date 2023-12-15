import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/AuthService/authentication.service';

@Component({
  selector: 'app-sibebar4',
  templateUrl: './sibebar4.component.html',
  styleUrls: ['./sibebar4.component.css']
})
export class Sibebar4Component implements OnInit {
  private token = localStorage.getItem('token')||'';
  connectUser:any={}
  isLoggedIn=false  //

  constructor(private authService:AuthenticationService) { }

  ngOnInit(): void {
    this.getUserByToken()
  }
  getUserByToken(){
    this.authService.getUserByToken(this.token).subscribe(
      (data)=>this.connectUser=data)
  }

}
