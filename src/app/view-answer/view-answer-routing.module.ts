import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewAnswerPage } from './view-answer.page';

const routes: Routes = [
  {
    path: '',
    component: ViewAnswerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewAnswerPageRoutingModule {}
