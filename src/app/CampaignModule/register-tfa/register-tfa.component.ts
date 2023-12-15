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
  roleOptions: { value: string }[] = [
    {value: 'ADMIN' },
    { value: 'MANAGER' },
  ];
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
            {this.authResponse = response;}
          } else {
            // inform the user
            this.message = 'Account created successfully';
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
          this.message = 'Account created successfully';
          setTimeout(() => {
            localStorage.setItem('token', response.accessToken as string);
            this.router.navigate(['register-tfa']);
          }, 3000);
        }
      });
  }

}
