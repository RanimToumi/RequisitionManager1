import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Questionnaire } from '../../models/Questionnaire';
import { Response  as MyResponse} from '../../models/Response';

@Injectable({
  providedIn: 'root'
})
export class QuestionnaireService {
  apiBaseUrl=environment.apiBaseUrlMarketing
  private token = localStorage.getItem('token');
  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  constructor(private http:HttpClient) { }
  getQuestionnaires(){
    const headers = this.getHeaders();
    return this.http.get<Questionnaire[]>(`${this.apiBaseUrl}/api/questionnaire/all`, { headers})
  }
  addQuestionnaire(questionnaire:Questionnaire){
    const headers = this.getHeaders();
    return this.http.post<Questionnaire>(`${this.apiBaseUrl}/api/questionnaire/add`,questionnaire, { headers})
  }
  addResponseToQuestion(response:MyResponse){
    return this.http.post<MyResponse>(`${this.apiBaseUrl}/api/response/add`,response)
  }
  getQuestionnaireByCampany(id:number){
    return this.http.get<Questionnaire>(`${this.apiBaseUrl}/api/questionnaire/campaign/${id}`)
  }
}
