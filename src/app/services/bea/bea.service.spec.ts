import { TestBed } from '@angular/core/testing';

import { BeaService } from './bea.service';

describe('BeaService', () => {
  let service: BeaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
