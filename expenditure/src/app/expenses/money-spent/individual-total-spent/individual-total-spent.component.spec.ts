import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualTotalSpentComponent } from './individual-total-spent.component';

describe('IndividualTotalSpentComponent', () => {
  let component: IndividualTotalSpentComponent;
  let fixture: ComponentFixture<IndividualTotalSpentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndividualTotalSpentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualTotalSpentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
