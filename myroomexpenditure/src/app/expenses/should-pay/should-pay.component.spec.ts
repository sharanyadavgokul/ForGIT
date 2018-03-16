import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShouldPayComponent } from './should-pay.component';

describe('ShouldPayComponent', () => {
  let component: ShouldPayComponent;
  let fixture: ComponentFixture<ShouldPayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShouldPayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShouldPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
