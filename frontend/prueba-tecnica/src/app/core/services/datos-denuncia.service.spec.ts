import { TestBed } from '@angular/core/testing';

import { DatosDenunciaService } from './datos-denuncia.service';

describe('DatosDenunciaService', () => {
  let service: DatosDenunciaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosDenunciaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
