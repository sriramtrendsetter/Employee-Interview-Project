import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddQuizQnsComponent } from './add-quiz-qns.component';

describe('AddQuizQnsComponent', () => {
  let component: AddQuizQnsComponent;
  let fixture: ComponentFixture<AddQuizQnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddQuizQnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddQuizQnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
