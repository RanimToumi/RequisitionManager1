import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationResponse } from '../models/AuthenticationResponse';
import { User } from '../models/User';
import { VerificationRequest } from '../models/VerificationRequest';
import { AuthenticationService } from '../services/AuthService/authentication.service';

@Component({
  selector: 'app-register-tfa',
  templateUrl: './register-tfa.component.html',
  styleUrls: ['./register-tfa.component.css']
})
export class RegisterTfaComponent implements OnInit {

  registerRequest: User = {};
  authResponse: AuthenticationResponse = {};
  message = '';
  otpCode = '';

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }
  registerUser() {
    this.message = '';
    this.authService.register(this.registerRequest)
      .subscribe(
        (response) => {
          if (response) {
            {this.authResponse = response;alert(this.authResponse.tfaEnabled)}
          } else {
            // inform the user
            this.message = 'Account created successfully\nYou will be redirected to the Login page in 3 seconds';
            setTimeout(() => {
              this.router.navigate(['login-tfa']);
            }, 3000)
          }
      });

  }

  verifyTfa() {
    this.message = '';
    const verifyRequest: VerificationRequest = {
      email: this.registerRequest.email,
      code: this.otpCode
    };
    this.authService.verifyCode(verifyRequest)
      .subscribe({
        next: (response) => {
          this.message = 'Account created successfully\nYou will be redirected to the Welcome page in 3 seconds';
          setTimeout(() => {
            localStorage.setItem('token', response.accessToken as string);
            this.router.navigate(['welcome']);
          }, 3000);
        }
      });
  }

}
