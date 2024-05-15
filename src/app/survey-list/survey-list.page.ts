// survey-list.page.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-survey-list',
  templateUrl: './survey-list.page.html',
  styleUrls: ['./survey-list.page.scss'],
})
export class SurveyListPage implements OnInit {
  surveyForms: any[] = [];

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit() {
    this.loadSurveyForms();
  }

  loadSurveyForms() {
    this.surveyForms = this.dataService.getSurveyForms();
  }

  viewForm(form: any) {
    this.dataService.setSelectedFormID(form.id);
    this.router.navigate(['/agreement']);
  }
}
