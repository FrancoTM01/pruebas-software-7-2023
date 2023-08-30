import { TestBed } from '@angular/core/testing';

import { CajeraService } from './cajera.service';

describe('CajeraService', () => {
  let service: CajeraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CajeraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
