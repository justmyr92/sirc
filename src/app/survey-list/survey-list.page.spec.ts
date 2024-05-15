import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SurveyListPage } from './survey-list.page';

describe('SurveyListPage', () => {
  let component: SurveyListPage;
  let fixture: ComponentFixture<SurveyListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
