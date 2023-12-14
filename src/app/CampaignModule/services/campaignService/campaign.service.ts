import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Campaign } from '../../models/Campaign';
import { Client } from '../../models/Client';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {
  apiBaseUrl=environment.apiBaseUrlMarketing
  private token = localStorage.getItem('token');
  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }
  constructor(private http:HttpClient) { }
  getCampaigns(){
    const headers = this.getHeaders();
    return this.http.get<Campaign[]>(`${this.apiBaseUrl}/api/campaign/all`, { headers})
  }
  getCampaignById(id:number){
    const headers = this.getHeaders();
    return this.http.get<Campaign>(`${this.apiBaseUrl}/api/campaign/find/${id}`, { headers})
  }
  LaunchCampaign(id:number){
    const headers = this.getHeaders();
    return this.http.post<Campaign>(`${this.apiBaseUrl}/api/campaign/${id}/launch`, { headers})
  }
  addCampaign(campaign:Campaign){
    const headers = this.getHeaders();
    return this.http.post<Campaign>(`${this.apiBaseUrl}/api/campaign/add`,campaign, { headers})
  }
  addClients(id:number,clients:Client[]){
    const headers = this.getHeaders();
    return this.http.post<Campaign>(`${this.apiBaseUrl}/api/campaign/${id}/addClients`,clients, { headers})
  }
  getCampaignByQuestionnaire(id:number){
    const headers = this.getHeaders();
    return this.http.get<Campaign>(`${this.apiBaseUrl}/api/campaign/get-by-questionnaire/${id}`, { headers})
  }
}
