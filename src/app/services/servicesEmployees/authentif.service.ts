import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthentifService {


  private apiUrl = 'http://localhost:9099/auth';

  constructor(
    private http: HttpClient,
    private router: Router
   
  ) {}

  authenticate(email: string, password: string): Observable<any> {
    const credentials = { email, password };
    return this.http.post(`${this.apiUrl}/authenticate`, credentials);
  }



  saveToken(token: string): void {
    localStorage.setItem('access_token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('access_token');
  }

  logout(): void {
    localStorage.removeItem('access_token')
    this.router.navigate(['/loginemployees']);
  }



}

// user.model.ts (créez ce fichier pour définir la structure de votre modèle d'utilisateur)
export interface User {
  message: number;
  email: string;
  role: string;
  // Ajoutez d'autres propriétés selon votre modèle d'utilisateur
}

