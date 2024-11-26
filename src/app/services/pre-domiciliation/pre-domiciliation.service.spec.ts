import { TestBed } from '@angular/core/testing';

import { PreDomiciliationService } from './pre-domiciliation.service';

describe('PreDomiciliationService', () => {
  let service: PreDomiciliationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreDomiciliationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
