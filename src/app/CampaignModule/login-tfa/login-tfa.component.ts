import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationResponse } from '../models/AuthenticationResponse';
import { AuthenticationRequest } from '../models/AuthenticationService';
import { VerificationRequest } from '../models/VerificationRequest';
import { AuthenticationService } from '../services/AuthService/authentication.service';

@Component({
  selector: 'app-login-tfa',
  templateUrl: './login-tfa.component.html',
  styleUrls: ['./login-tfa.component.css']
})
export class LoginTfaComponent implements OnInit {

  authRequest: AuthenticationRequest = {};
  otpCode = '';
  authResponse: AuthenticationResponse = {};

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }
  authenticate() {
    this.authService.login(this.authRequest)
      .subscribe({
        next: (response) => {
          this.authResponse = response;
          if (!this.authResponse.tfaEnabled) {
            localStorage.setItem('token', response.accessToken as string);
            this.router.navigate(['welcome']);
          }
        }
      });
  }

  verifyCode() {
    const verifyRequest: VerificationRequest = {
      email: this.authRequest.email,
      code: this.otpCode
    };
    this.authService.verifyCode(verifyRequest)
      .subscribe({
        next: (response) => {
          localStorage.setItem('token', response.accessToken as string);
          this.router.navigate(['campaigns']);
        }
      });
  }
}

