import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Client } from '../../models/Client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private apiBaseUrl= environment.apiBaseUrlMarketing;
  private token = localStorage.getItem('token');
  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }


  constructor(private http:HttpClient) { }
  getClients(){
    return this.http.get<Client[]>(`${this.apiBaseUrl}/api/client/all`)
  }
  getClientById(id:number){
    return this.http.get<Client>(`${this.apiBaseUrl}/api/client/find/${id}`)
  }
  deleteClientById(id:number){
    const headers = this.getHeaders();
    return this.http.delete<Client>(`${this.apiBaseUrl}/api/client/delete/${id}`,{ headers})
  }
  UpdateClient(client:Client){
    const headers = this.getHeaders();
    return this.http.put<Client>(`${this.apiBaseUrl}/api/client/update`,client,{ headers})
  }
  getClientByGender(gender:string){
    return this.http.get<Client[]>(`${this.apiBaseUrl}/api/client/by-gender/${gender}`)
  }
  /*getClientByField(field:string){
    return this.http.get<Client[]>(`${this.apiBaseUrl}/api/by-gender/${field}`)
  }*/
  getClientByCountry(country:string){
    return this.http.get<Client[]>(`${this.apiBaseUrl}/api/client/by-country/${country}`)
  }
  getClientByAgeScale(max:number,min:number){
    return this.http.get<Client[]>(`${this.apiBaseUrl}/api/client/by-age-scale/${max}/${min}`)
  }
  addClient(client:Client){
    const headers = this.getHeaders();
    return this.http.post<Client>(`${this.apiBaseUrl}/api/client/add`,client,{ headers})
  }

}
