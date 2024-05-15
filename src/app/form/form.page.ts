import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {
  surveyForm: any;
  answers: any[] = []; // Array to store answers

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit() {
    const selectedFormId = this.dataService.getSelectedFormID();
    console.log(selectedFormId, 'selectedFormId');
    if (selectedFormId) {
      this.surveyForm = this.dataService.getFormById(selectedFormId);
      console.log(this.surveyForm, 'surveyForm');
    }
  }

  submitAnswers() {
    const surveyId = this.surveyForm.id;
    this.answers = []; // Clear answers array
    this.surveyForm.questions.forEach((question: any) => {
      if (question.question_type === 'multipleChoice') {
        const answer = {
          questionId: question.qid,
          answer: question.selectedOption, // Assuming you store selected option in question.selectedOption
        };
        this.answers.push(answer);
      } else {
        // For short answer, paragraph, and other types
        const answer = {
          questionId: question.qid,
          answer: question.answer, // Assuming you bind the answer to question.answer
        };
        this.answers.push(answer);
      }
    });

    // Now, you have your answers in the desired format
    const submission = {
      id: Math.random().toString(36).substr(2, 9), // Generate a random ID
      signature: this.dataService.getSignature(),
      surveyId: surveyId,
      answers: this.answers,
    };

    // You can now submit this 'submission' object to your data service
    console.log(submission);
    // Call a method in your data service to submit the answers
    this.dataService.submitAnswers(submission);

    this.router.navigate(['/survey-list']);
  }
}
