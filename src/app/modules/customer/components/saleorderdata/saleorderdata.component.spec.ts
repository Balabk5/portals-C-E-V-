import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleorderdataComponent } from './saleorderdata.component';

describe('SaleorderdataComponent', () => {
  let component: SaleorderdataComponent;
  let fixture: ComponentFixture<SaleorderdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaleorderdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleorderdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
