import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewSurveyPage } from './view-survey.page';

describe('ViewSurveyPage', () => {
  let component: ViewSurveyPage;
  let fixture: ComponentFixture<ViewSurveyPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSurveyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
