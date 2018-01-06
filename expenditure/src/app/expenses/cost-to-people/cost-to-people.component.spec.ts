import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostToPeopleComponent } from './cost-to-people.component';

describe('CostToPeopleComponent', () => {
  let component: CostToPeopleComponent;
  let fixture: ComponentFixture<CostToPeopleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostToPeopleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostToPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
