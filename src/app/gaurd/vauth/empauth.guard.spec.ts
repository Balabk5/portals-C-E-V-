import { TestBed } from '@angular/core/testing';

import { EmpauthGuard } from './empauth.guard';

describe('EmpauthGuard', () => {
  let guard: EmpauthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EmpauthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
