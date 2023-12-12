import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthenticationService } from '../services/AuthService/authentication.service';

//
@Component({
  selector: 'app-header4',
  templateUrl: './header4.component.html',
  styleUrls: ['./header4.component.css']
})
export class Header4Component implements OnInit {
  private token = localStorage.getItem('token')||'';
  connectUser:any={}
  isLoggedIn=false
  constructor(private authService:AuthenticationService,  private router: Router) { }

  ngOnInit(): void {
    this.getUserByToken()
    if(this.token!=='') {this.isLoggedIn=true}
  }
  getUserByToken(){
    this.authService.getUserByToken(this.token).subscribe(
      (data)=>this.connectUser=data),
      (error:HttpErrorResponse) =>alert(error.message)
  }
  logout () {
    localStorage.removeItem('token');
    this.isLoggedIn=false
    console.log(this.isLoggedIn)
    this.router.navigate(['login-tfa']);
  };
}
