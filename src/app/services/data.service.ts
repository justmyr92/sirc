import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  // private jsonFile = 'assets/data.json'; // Corrected path if your JSON file is in the assets folder
  private jsonFile = 'https://api.jsonbin.io/v3/b/6644f996e41b4d34e4f439d1'; // Corrected path if your JSON file is in the assets folder
  private answersFile = 'https://api.jsonbin.io/v3/b/66453299e41b4d34e4f451e0'; // Corrected path if your JSON file is in the assets folder
  private surveyForms: any[] = [];
  private surveyAnswers: any[] = [];
  private selectedFormID = '';
  private selectedAnswer: any = {};
  private signature: any = {};
  getSelectedAnswer(): string {
    return this.selectedAnswer;
  }
  setSelectedAnswerID(answer: any) {
    this.selectedAnswer = answer;
  }

  getSignature(): any {
    return this.signature;
  }

  setSignature(signature: any) {
    this.signature = signature;
  }

  constructor(private http: HttpClient) {
    this.loadSurveyForms().subscribe();
    this.loadSuveryAnswers().subscribe();
  }

  loadSuveryAnswers(): Observable<any[]> {
    return this.http
      .get<any[]>(this.answersFile, {
        headers: {
          'X-Master-Key':
            '$2a$10$Hn4mhNb7bfQ8TJ8ohooq3ORC4HWmnh0gH2/TAHuGAgBAQoUOAY2TK',
          'X-Access-Key':
            '$2a$10$hUbdAGVOh32fIJDUNkncq.jBFGahNcrMbl686n4BpeD8oNZCziP0i',
        },
      })
      .pipe(
        tap((response: any) => {
          this.surveyAnswers = response.record;
        })
      );
  }

  getSurveyAnswers(): any[] {
    return this.surveyAnswers;
  }

  submitAnswers(submission: any) {
    console.log(submission, 'submission', this.surveyAnswers);
    this.surveyAnswers.push(submission);
    this.http
      .put(this.answersFile, this.surveyAnswers, {
        headers: {
          'X-Master-Key':
            '$2a$10$Hn4mhNb7bfQ8TJ8ohooq3ORC4HWmnh0gH2/TAHuGAgBAQoUOAY2TK',
          'X-Access-Key':
            '$2a$10$hUbdAGVOh32fIJDUNkncq.jBFGahNcrMbl686n4BpeD8oNZCziP0i',
        },
      })
      .subscribe(
        //load answers
        () => {
          this.loadSuveryAnswers().subscribe();
        }
      );
  }

  loadSurveyForms(): Observable<any[]> {
    //with headers
    return this.http
      .get<any[]>(this.jsonFile, {
        headers: {
          'X-Master-Key':
            '$2a$10$Hn4mhNb7bfQ8TJ8ohooq3ORC4HWmnh0gH2/TAHuGAgBAQoUOAY2TK',
          'X-Access-Key':
            '$2a$10$hUbdAGVOh32fIJDUNkncq.jBFGahNcrMbl686n4BpeD8oNZCziP0i',
        },
      })
      .pipe(
        tap((response: any) => {
          // Assign the array from the 'record' property to surveyForms
          this.surveyForms = response.record;
          console.log(this.surveyForms, 'forms', response);
        })
      );
  }

  getSurveyForms(): any[] {
    return this.surveyForms;
  }

  setSelectedFormID(id: string) {
    this.selectedFormID = id;
  }

  getSelectedFormID(): string {
    return this.selectedFormID;
  }

  addSurveyForm(form: any) {
    console.log(form, 'form', this.surveyForms);
    this.surveyForms.push(form);
    this.uploadSurveyForms();
  }

  getFormById(id: string): any {
    console.log(
      this.surveyForms,
      'forms',
      this.surveyForms.find((form) => form.id === id)
    );
    return this.surveyForms.find((form) => form.id === id);
  }

  private uploadSurveyForms() {
    this.http
      .put(this.jsonFile, this.surveyForms, {
        headers: {
          'X-Master-Key':
            '$2a$10$Hn4mhNb7bfQ8TJ8ohooq3ORC4HWmnh0gH2/TAHuGAgBAQoUOAY2TK',
          'X-Access-Key':
            '$2a$10$hUbdAGVOh32fIJDUNkncq.jBFGahNcrMbl686n4BpeD8oNZCziP0i',
        },
      })
      .pipe(
        tap((response: any) => {
          this.loadSurveyForms().subscribe();
        })
      )
      .subscribe();
  }

  deleteSurveyForm(id: string) {
    this.surveyForms = this.surveyForms.filter((form) => form.id !== id);
    console.log(this.surveyForms, 'forms');
    this.uploadSurveyForms();
  }
}
