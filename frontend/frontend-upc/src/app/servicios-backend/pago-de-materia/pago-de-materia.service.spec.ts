import { TestBed } from '@angular/core/testing';

import { PagoDeMateriaService } from './pago-de-materia.service';

describe('PagoDeMateriaService', () => {
  let service: PagoDeMateriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PagoDeMateriaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
