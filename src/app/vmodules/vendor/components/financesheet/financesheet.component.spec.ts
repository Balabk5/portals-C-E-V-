import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancesheetComponent } from './financesheet.component';

describe('FinancesheetComponent', () => {
  let component: FinancesheetComponent;
  let fixture: ComponentFixture<FinancesheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancesheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancesheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
