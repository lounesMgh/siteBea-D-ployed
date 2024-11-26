import { TestBed } from '@angular/core/testing';

import { EbankingService } from './ebanking.service';

describe('EbankingService', () => {
  let service: EbankingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EbankingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
