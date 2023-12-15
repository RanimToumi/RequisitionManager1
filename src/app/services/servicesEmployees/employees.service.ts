import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeDTO } from 'src/app/models/models/employeesDTO';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from '../authService/authentication.service';
import { AuthentifService } from './authentif.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  // private URL = environment.apiBaseUrl;

  private proxiedUrl = '/api';
  private URL = environment.apiBaseUrl2;

  constructor(
    private http: HttpClient,
    private authService: AuthentifService
  ) {}

  getUserInfo(): Observable<EmployeeDTO> {
    // Récupérer le token depuis le service AuthService
    const token = this.authService.getToken();
    console.log(token);
    // Créer les en-têtes avec le token d'autorisation
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    console.log('hello');

    return this.http.get<EmployeeDTO>(`${this.URL}/auth/info`, { headers });
  }

  getAllEmployees(): Observable<EmployeeDTO[]> {
    // Récupérer le token depuis le service AuthService
    const token = this.authService.getToken();

    // Créer les en-têtes avec le token d'autorisation
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    // Utiliser les en-têtes dans la requête HTTP GET
    return this.http.get<EmployeeDTO[]>(`${this.URL}/api/employees/all`, {
      headers,
    });

    // return this.http.get<EmployeeDTO[]>(`${this.URL}/api/employees/all`);
  }

  DeleteEmployee(idEmployee: number): Observable<void> {
    // Récupérer le token depuis le service AuthService
    const token = this.authService.getToken();

    // Créer les en-têtes avec le token d'autorisation
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.delete<void>(`${this.URL}/api/employees/${idEmployee}`, {
      headers,
    });
  }

  AddEmployee(employeeData: EmployeeDTO): Observable<EmployeeDTO[]> {
    // Récupérer le token depuis le service AuthService
    const token = this.authService.getToken();

    // Créer les en-têtes avec le token d'autorisation
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post<EmployeeDTO[]>(
      `${this.URL}/api/employees/add`,
      employeeData,
      { headers }
    );
  }
  UpdateEmployee(idEmployee: number, employeeData: EmployeeDTO) {
    // Récupérer le token depuis le service AuthService
    const token = this.authService.getToken();

    // Créer les en-têtes avec le token d'autorisation
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.put<EmployeeDTO[]>(
      `${this.URL}/api/employees/${idEmployee}`,
      employeeData,
      { headers }
    );
  }
}