import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-view-survey',
  templateUrl: './view-survey.page.html',
  styleUrls: ['./view-survey.page.scss'],
})
export class ViewSurveyPage implements OnInit {
  surveyId: string = '';
  answers: any[] = [];
  form: any = {};
  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.surveyId = this.dataService.getSelectedFormID();
    this.answers = this.dataService.getSurveyAnswers();
    this.form = this.dataService.getFormById(this.surveyId);
  }

  openAnswer(answer: any) {
    this.dataService.setSelectedAnswerID(answer);
    console.log(answer);
    this.router.navigateByUrl('/view-answer');
  }

  // generateExcel() {
  //   const wb = XLSX.utils.book_new();
  //   const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet([]);

  //   // Add survey title to the first row, spanning all columns
  //   XLSX.utils.sheet_add_aoa(ws, [[this.form.title]], {
  //     origin: 'A1',
  //   });
  //   ws['!merges'] = [
  //     { s: { r: 0, c: 0 }, e: { r: 0, c: this.form.questions.length - 1 } },
  //   ];

  //   // Add question texts to the second row
  //   const questionRow = this.form.questions.map(
  //     (question: { question: any }) => question.question
  //   );
  //   XLSX.utils.sheet_add_aoa(ws, [questionRow], { origin: 'A2' });

  //   // Loop through answers and add them to subsequent rows
  //   this.answers.forEach((answerSet, rowIndex) => {
  //     const rowData = this.form.questions.map((question: { qid: string }) => {
  //       const answer = answerSet.answers.find(
  //         (ans: { questionId: string }) => ans.questionId === question.qid
  //       );
  //       return answer ? answer.answer : '';
  //     });
  //     XLSX.utils.sheet_add_aoa(ws, [rowData], { origin: `A${rowIndex + 3}` });
  //   });

  //   // Add the worksheet to the workbook
  //   XLSX.utils.book_append_sheet(wb, ws, 'Survey Answers');

  //   // Save the workbook as an Excel file
  //   XLSX.writeFile(wb, 'survey_answers.xlsx');
  // }

  generateExcel() {
    const wb = XLSX.utils.book_new();
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet([]);

    // Add survey title to the first row, spanning all columns
    XLSX.utils.sheet_add_aoa(ws, [[this.form.title]], { origin: 'A1' });
    ws['!merges'] = [
      { s: { r: 0, c: 0 }, e: { r: 0, c: this.form.questions.length - 1 } },
    ];

    // Add signature to the second row, spanning all columns
    const signatureData =
      this.answers.length > 0 ? this.answers[0].signature : '';
    XLSX.utils.sheet_add_aoa(ws, [[signatureData]], { origin: 'A2' });
    ws['!merges'].push({
      s: { r: 1, c: 0 },
      e: { r: 1, c: this.form.questions.length - 1 },
    });

    // Add question texts to the third row
    const questionRow = this.form.questions.map(
      (question = { question: '' }) => question.question
    );
    XLSX.utils.sheet_add_aoa(ws, [questionRow], { origin: 'A3' });

    // Loop through answers and add them to subsequent rows
    this.answers.forEach((answerSet, rowIndex) => {
      const rowData = this.form.questions.map((question = { qid: '' }) => {
        const answer = answerSet.answers.find(
          (ans = { questionId: '' }) => ans.questionId === question.qid
        );
        return answer ? answer.answer : '';
      });
      XLSX.utils.sheet_add_aoa(ws, [rowData], { origin: `A${rowIndex + 4}` });
    });

    // Add the worksheet to the workbook
    XLSX.utils.book_append_sheet(wb, ws, 'Survey Answers');

    // Save the workbook as an Excel file
    XLSX.writeFile(wb, 'survey_answers.xlsx');
  }
}
