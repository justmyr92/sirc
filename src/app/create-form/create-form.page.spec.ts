import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateFormPage } from './create-form.page';

describe('CreateFormPage', () => {
  let component: CreateFormPage;
  let fixture: ComponentFixture<CreateFormPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
