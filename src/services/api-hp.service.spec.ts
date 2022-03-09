import { TestBed } from '@angular/core/testing';

import { ApiHpService } from './api-hp.service';

describe('ApiHpService', () => {
  let service: ApiHpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiHpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
