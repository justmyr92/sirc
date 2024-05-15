import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

interface Question {
  qid: string;
  question: string;
  question_type: string;
  options: string[];
}

// Define an interface for a survey
interface Survey {
  id: string;
  title: string;
  questions: Question[];
}

@Component({
  selector: 'app-view-answer',
  templateUrl: './view-answer.page.html',
  styleUrls: ['./view-answer.page.scss'],
})
export class ViewAnswerPage implements OnInit {
  form: any = {};
  answers: any = {};

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.answers = this.dataService.getSelectedAnswer();
    this.form = this.dataService.getFormById(this.answers?.surveyId);
  }
}
