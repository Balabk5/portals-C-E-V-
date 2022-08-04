import { TestBed } from '@angular/core/testing';

import { VauthenticationService } from './vauthentication.service';

describe('VauthenticationService', () => {
  let service: VauthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VauthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
