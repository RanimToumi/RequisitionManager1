import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationRequest } from 'src/app/models/AuthenticationRequest';
import { AuthenticationResponse } from 'src/app/models/AuthenticationResponse';
import { RegisterRequest } from 'src/app/models/register-request';
import { VerificationRequest } from 'src/app/models/VerificationRequest';
import { environment } from 'src/environments/environment';
import { User } from '../../models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private baseUrl = environment.apiBaseUrlMarketing;
  private token = localStorage.getItem('token');
  constructor(private http: HttpClient) { }
  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }
  register(
    registerRequest: RegisterRequest
  ) {
    const headers = this.getHeaders();
    return this.http.post<AuthenticationResponse>
    (`${this.baseUrl}/api/authentication/register`, registerRequest,{headers});
  }

  login(
    authRequest: AuthenticationRequest
  ) {
    return this.http.post<AuthenticationResponse>
    (`${this.baseUrl}/api/authentication/authenticate`, authRequest);
  }

  verifyCode(verificationRequest: VerificationRequest) {
    return this.http.post<AuthenticationResponse>
    (`${this.baseUrl}/api/authentication/verify`, verificationRequest);
  }
  getUserByToken(token:string){
    //const headers = this.getHeaders();
    return this.http.get<User>(`${this.baseUrl}/api/authentication/findByToken/${token}`)
  }
}