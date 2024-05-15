import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewAnswerPage } from './view-answer.page';

describe('ViewAnswerPage', () => {
  let component: ViewAnswerPage;
  let fixture: ComponentFixture<ViewAnswerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAnswerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
