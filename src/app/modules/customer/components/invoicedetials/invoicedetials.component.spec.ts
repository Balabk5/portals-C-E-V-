import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicedetialsComponent } from './invoicedetials.component';

describe('InvoicedetialsComponent', () => {
  let component: InvoicedetialsComponent;
  let fixture: ComponentFixture<InvoicedetialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoicedetialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoicedetialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
