import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewSurveyPage } from './view-survey.page';

const routes: Routes = [
  {
    path: '',
    component: ViewSurveyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewSurveyPageRoutingModule {}
