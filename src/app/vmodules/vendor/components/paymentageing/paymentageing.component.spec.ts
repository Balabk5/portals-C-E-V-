import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentageingComponent } from './paymentageing.component';

describe('PaymentageingComponent', () => {
  let component: PaymentageingComponent;
  let fixture: ComponentFixture<PaymentageingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentageingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentageingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
