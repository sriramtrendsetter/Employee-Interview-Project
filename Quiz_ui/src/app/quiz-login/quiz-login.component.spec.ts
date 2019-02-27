import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizLoginComponent } from './quiz-login.component';

describe('QuizLoginComponent', () => {
  let component: QuizLoginComponent;
  let fixture: ComponentFixture<QuizLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
