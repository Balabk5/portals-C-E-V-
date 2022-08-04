import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpprofComponent } from './empprof.component';

describe('EmpprofComponent', () => {
  let component: EmpprofComponent;
  let fixture: ComponentFixture<EmpprofComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpprofComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpprofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
