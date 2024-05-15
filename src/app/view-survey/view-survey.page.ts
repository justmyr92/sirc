import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-view-survey',
  templateUrl: './view-survey.page.html',
  styleUrls: ['./view-survey.page.scss'],
})
export class ViewSurveyPage implements OnInit {
  surveyId: string = '';
  answers: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.surveyId = this.dataService.getSelectedFormID();
    this.answers = this.dataService.getSurveyAnswers();
  }
}
