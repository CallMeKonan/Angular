import { TestBed } from '@angular/core/testing';

import { ServicioOscuroService } from './servicio-oscuro.service';

describe('ServicioOscuroService', () => {
  let service: ServicioOscuroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioOscuroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
