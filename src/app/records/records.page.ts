import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-records',
  templateUrl: './records.page.html',
  styleUrls: ['./records.page.scss'],
})
export class RecordsPage implements OnInit {
  surveyForms: any[] = [];

  constructor(private dataService: DataService, private router: Router) {
    this.dataService.loadSurveyForms().subscribe((forms: any) => {
      this.surveyForms = forms.record;
    });
  }

  ngOnInit() {}

  openSurvey(id: string) {
    this.dataService.setSelectedFormID(id);
    this.router.navigateByUrl('/view-survey');
  }
}
