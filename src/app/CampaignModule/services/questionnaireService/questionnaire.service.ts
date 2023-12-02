import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Questionnaire } from '../../models/Questionnaire';
import { Response  as MyResponse} from '../../models/Response';

@Injectable({
  providedIn: 'root'
})
export class QuestionnaireService {
  apiBaseUrl=environment.apiBaseUrlMarketing

  constructor(private http:HttpClient) { }
  getQuestionnaires(){
    return this.http.get<Questionnaire[]>(`${this.apiBaseUrl}/api/questionnaire/all`)
  }
  addQuestionnaire(questionnaire:Questionnaire){
    return this.http.post<Questionnaire>(`${this.apiBaseUrl}/api/questionnaire/add`,questionnaire)
  }
  addResponseToQuestion(response:MyResponse){
    return this.http.post<MyResponse>(`${this.apiBaseUrl}/api/response/add`,response)
  }
  getQuestionnaireByCampany(id:number){
    return this.http.get<Questionnaire>(`${this.apiBaseUrl}/api/questionnaire/campaign/${id}`)
  }
}
