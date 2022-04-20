import { TestBed } from '@angular/core/testing';

import { Servizio01Service } from './servizio01.service';

describe('Servizio01Service', () => {
  let service: Servizio01Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Servizio01Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
