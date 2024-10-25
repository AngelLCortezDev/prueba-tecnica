import { TestBed } from '@angular/core/testing';

import { DetalleDenunciaService } from './detalle-denuncia.service';

describe('DetalleDenunciaService', () => {
  let service: DetalleDenunciaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetalleDenunciaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
