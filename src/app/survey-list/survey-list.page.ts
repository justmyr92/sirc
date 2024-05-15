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
    // Load survey forms when the component initializes
    this.loadSurveyForms();
  }

  loadSurveyForms() {
    // Subscribe to the Observable returned by getSurveyForms
    this.dataService.loadSurveyForms().subscribe((forms: any) => {
      // Assign the fetched survey forms to the component property
      this.surveyForms = forms.record;
      console.log(this.surveyForms, 'surveyForms');
    });
  }

  viewForm(form: any) {
    this.dataService.setSelectedFormID(form.id);
    this.router.navigate(['/agreement']);
  }

  deleteForm(form: any) {
    console.log(form.id);
    this.dataService.deleteSurveyForm(form.id);
  }
}
