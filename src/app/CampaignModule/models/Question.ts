import { Response } from "./Response";
export interface Question {
    id: number;
    questionText: string;
    options: string[];
    responses?:Response[]
    questionnaire_id: number;
    optionsWithCount?: { [key: string]: number }; 
  }