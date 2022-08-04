import { TestBed } from '@angular/core/testing';

import { CustauthGuard } from './custauth.guard';

describe('CustauthGuard', () => {
  let guard: CustauthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CustauthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
