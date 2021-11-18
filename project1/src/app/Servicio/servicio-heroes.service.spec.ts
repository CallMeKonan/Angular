import { TestBed } from '@angular/core/testing';

import { ServicioHeroesService } from './servicio-heroes.service';

describe('ServicioHeroesService', () => {
  let service: ServicioHeroesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioHeroesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
