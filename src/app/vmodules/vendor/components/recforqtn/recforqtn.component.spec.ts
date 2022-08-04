import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecforqtnComponent } from './recforqtn.component';

describe('RecforqtnComponent', () => {
  let component: RecforqtnComponent;
  let fixture: ComponentFixture<RecforqtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecforqtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecforqtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
