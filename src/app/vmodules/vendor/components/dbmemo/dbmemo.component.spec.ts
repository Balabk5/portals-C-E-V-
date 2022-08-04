import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbmemoComponent } from './dbmemo.component';

describe('DbmemoComponent', () => {
  let component: DbmemoComponent;
  let fixture: ComponentFixture<DbmemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DbmemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DbmemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
