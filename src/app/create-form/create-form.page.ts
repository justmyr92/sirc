import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { saveAs } from 'file-saver';

interface Question {
  qid: string;
  question: string;
  question_type: string;
  options: string[];
}

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.page.html',
  styleUrls: ['./create-form.page.scss'],
})
export class CreateFormPage implements OnInit {
  questions: Question[] = [];
  formTitle: string = '';

  constructor(private dataService: DataService) {}

  ngOnInit() {}

  trackByFn(index: any, item: any) {
    return index;
  }

  idGenerator(): string {
    return (
      Math.random().toString(36).substring(2, 15) +
      Math.floor(Math.random() * 899999999 + 100000000)
    );
  }

  addQuestion() {
    this.questions.push({
      //add id to question
      qid: this.idGenerator().toString(),
      question: '',
      question_type: 'text',
      options: [],
    });
  }

  addOption(question: Question) {
    question.options.push('');
  }

  removeOption(question: Question, index: number) {
    question.options.splice(index, 1);
  }
  submit() {
    const form = {
      id: this.idGenerator(),
      title: this.formTitle,
      questions: this.questions,
    };

    this.dataService.addSurveyForm(form);
  }
}
