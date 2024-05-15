import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewAnswerPageRoutingModule } from './view-answer-routing.module';

import { ViewAnswerPage } from './view-answer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewAnswerPageRoutingModule
  ],
  declarations: [ViewAnswerPage]
})
export class ViewAnswerPageModule {}
