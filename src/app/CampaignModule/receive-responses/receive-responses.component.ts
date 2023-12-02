import { Component, OnInit } from '@angular/core';
import { Campaign } from '../models/Campaign';
import { Question } from '../models/Question';
import { Questionnaire } from '../models/Questionnaire';
import { Response } from '../models/Response';
import { CampaignService } from '../services/campaignService/campaign.service';
import { QuestionnaireService } from '../services/questionnaireService/questionnaire.service';

@Component({
  selector: 'app-receive-responses',
  templateUrl: './receive-responses.component.html',
  styleUrls: ['./receive-responses.component.css']
})
export class ReceiveResponsesComponent implements OnInit {
  questionnaires: any[] = [];
  selectedQuestionnaire: Questionnaire | null = null;
  constructor(private questionnaireService:QuestionnaireService,private campaignService:CampaignService) { }

  ngOnInit(): void {
    this.loadQuestionnaires();
  }
  openModal(questionnaire: Questionnaire): void {
    this.selectedQuestionnaire = questionnaire;
    this.processQuestionnaireResponses();
  }

  closeModal(): void {
    this.selectedQuestionnaire = null;
  }
  
  processQuestionnaireResponses(): void {
    if (this.selectedQuestionnaire && this.selectedQuestionnaire.questions) {
      this.selectedQuestionnaire.questions.forEach(question => {
        const responses = question.responses;
        if (responses) {
          const optionsWithCount = this.countOptionsInResponses(responses);
          question.optionsWithCount = optionsWithCount;
        }
      });
    }
  }
  
  countOptionsInResponses(responses: Response[]): { [key: string]: number } {
    const optionsCount: { [key: string]: number } = {};

    responses.forEach(response => {
      if (response.answer in optionsCount) {
        optionsCount[response.answer]++;
      } else {
        optionsCount[response.answer] = 1;
      }
    });

    return optionsCount;
  }
  loadQuestionnaires() {
    this.questionnaireService.getQuestionnaires().subscribe(
      (data: any[]) => {
        // Fetch campaign name for each questionnaire
        data.forEach(questionnaire => {
          this.campaignService.getCampaignByQuestionnaire(questionnaire.id).subscribe(
            (campaign: Campaign) => {
              questionnaire.campaignName = campaign.name;
            },
            (error) => {
              console.error('Error fetching campaign name:', error);
            }
          );
        });
        this.questionnaires = data;
      },
      (error) => {
        console.error('Error fetching questionnaires:', error);
      }
    );
  }
  optionsArray(optionsWithCount: { [key: string]: number } | undefined): { option: string, count: number }[] {
    const optionsArray: { option: string, count: number }[] = [];

    if (optionsWithCount) {
      for (const option in optionsWithCount) {
        if (optionsWithCount.hasOwnProperty(option)) {
          optionsArray.push({ option, count: optionsWithCount[option] });
        }
      }
    }

    return optionsArray;
  }

}
