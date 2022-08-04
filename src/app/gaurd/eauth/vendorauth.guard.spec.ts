import { TestBed } from '@angular/core/testing';

import { VendorauthGuard } from './vendorauth.guard';

describe('VendorauthGuard', () => {
  let guard: VendorauthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(VendorauthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
