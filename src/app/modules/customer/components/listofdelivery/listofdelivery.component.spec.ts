import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofdeliveryComponent } from './listofdelivery.component';

describe('ListofdeliveryComponent', () => {
  let component: ListofdeliveryComponent;
  let fixture: ComponentFixture<ListofdeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListofdeliveryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListofdeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
