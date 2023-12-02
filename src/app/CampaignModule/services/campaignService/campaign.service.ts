import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Campaign } from '../../models/Campaign';
import { Client } from '../../models/Client';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {
  apiBaseUrl=environment.apiBaseUrlMarketing


  constructor(private http:HttpClient) { }
  getCampaigns(){
    return this.http.get<Campaign[]>(`${this.apiBaseUrl}/api/campaign/all`)
  }
  getCampaignById(id:number){
    return this.http.get<Campaign>(`${this.apiBaseUrl}/api/campaign/find/${id}`)
  }
  LaunchCampaign(id:number){
    return this.http.post<Campaign>(`${this.apiBaseUrl}/api/campaign/${id}/launch`,{})
  }
  addCampaign(campaign:Campaign){
    return this.http.post<Campaign>(`${this.apiBaseUrl}/api/campaign/add`,campaign)
  }
  addClients(id:number,clients:Client[]){
    return this.http.post<Campaign>(`${this.apiBaseUrl}/api/campaign/${id}/addClients`,clients)
  }
  getCampaignByQuestionnaire(id:number){
    return this.http.get<Campaign>(`${this.apiBaseUrl}/api/campaign/get-by-questionnaire/${id}`)
  }
}
