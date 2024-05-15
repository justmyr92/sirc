import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {
  surveyForm: any;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    const selectedFormId = this.dataService.getSelectedFormID();
    if (selectedFormId) {
      this.surveyForm = this.dataService.getFormById(selectedFormId);
    }
  }
}
