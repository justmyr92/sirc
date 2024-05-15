import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private jsonFile = './assets/data.json'; // Corrected path if your JSON file is in the assets folder
  private surveyForms: any[] = [
    {
      id: '5kkydqkoctk1655822142',
      title: 'Survey 1',
      questions: [
        {
          question: 'question1',
          question_type: 'multipleChoice',
          options: ['option1', 'option2', 'option3', 'option4'],
        },
        {
          question: 'question2',
          question_type: 'multipleChoice',
          options: ['option1', 'option2', 'option3', 'option4'],
        },
        {
          question: 'question3',
          question_type: 'multipleChoice',
          options: ['option1', 'option2', 'option3', 'option4'],
        },
        {
          question: 'question4',
          question_type: 'paragraph',
          options: [],
        },
        {
          question: 'question5',
          question_type: 'shortAnswer',
          options: [],
        },
      ],
    },
  ];

  private selectedFormID = '';
  constructor(private http: HttpClient) {}

  // loadSurveyForms(): Observable<any[]> {
  //   return this.http.get<any[]>(this.jsonFile).pipe(
  //     tap((forms) => {
  //       this.surveyForms = forms;
  //     })
  //   );
  // }

  getSurveyForms(): any[] {
    return this.surveyForms;
  }

  setSelectedFormID(id: string) {
    this.selectedFormID = id;
  }

  getSelectedFormID(): string {
    return this.selectedFormID;
  }

  addSurveyForm(form: any): Observable<any> {
    this.surveyForms.push(form);
    return this.uploadSurveyForms();
  }

  getFormById(id: string): any {
    return this.surveyForms.find((form) => form.id === id);
  }
  private uploadSurveyForms(): Observable<any> {
    return this.http.put(this.jsonFile, this.surveyForms);
  }
}
