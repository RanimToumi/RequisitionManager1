import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Field } from '../../models/Field';

@Injectable({
  providedIn: 'root'
})
export class FieldService {
  private apiBaseUrl= environment.apiBaseUrlMarketing;
  private token = localStorage.getItem('token');
  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }
  addField(field:Field){
    const headers = this.getHeaders();
    return this.http.post<Field>(`${this.apiBaseUrl}/api/field/add`,field)
  }
  constructor(private http:HttpClient) { }
  getFields(){
    return this.http.get<Field[]>(`${this.apiBaseUrl}/api/field/all`)
  }
  getFieldNameById(id:number){
    return this.http.get<string>(`${this.apiBaseUrl}/api/field/name/${id}`)
  }
}
