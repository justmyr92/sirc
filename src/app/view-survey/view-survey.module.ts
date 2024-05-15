import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewSurveyPageRoutingModule } from './view-survey-routing.module';

import { ViewSurveyPage } from './view-survey.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewSurveyPageRoutingModule
  ],
  declarations: [ViewSurveyPage]
})
export class ViewSurveyPageModule {}
