import { TestBed } from '@angular/core/testing';

import { EauthenticationService } from './eauthentication.service';

describe('EauthenticationService', () => {
  let service: EauthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EauthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
