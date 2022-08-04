import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdmemoComponent } from './cdmemo.component';

describe('CdmemoComponent', () => {
  let component: CdmemoComponent;
  let fixture: ComponentFixture<CdmemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdmemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CdmemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
