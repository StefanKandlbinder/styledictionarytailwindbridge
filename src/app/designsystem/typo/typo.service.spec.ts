import { TestBed } from '@angular/core/testing';

import { TypoService } from './typo.service';

describe('TypoService', () => {
  let service: TypoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
