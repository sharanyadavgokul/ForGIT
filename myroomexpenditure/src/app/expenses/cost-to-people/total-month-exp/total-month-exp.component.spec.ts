import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalMonthExpComponent } from './total-month-exp.component';

describe('TotalMonthExpComponent', () => {
  let component: TotalMonthExpComponent;
  let fixture: ComponentFixture<TotalMonthExpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalMonthExpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalMonthExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
