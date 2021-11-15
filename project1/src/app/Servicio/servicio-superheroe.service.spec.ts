import { TestBed } from '@angular/core/testing';

import { ServicioSuperheroeService } from './servicio-superheroe.service';

describe('ServicioSuperheroeService', () => {
  let service: ServicioSuperheroeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioSuperheroeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
