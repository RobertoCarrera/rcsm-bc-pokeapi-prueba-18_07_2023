import { TestBed } from '@angular/core/testing';

import { PokemonsAPIService } from './pokemons-api.service';

describe('PokemonsAPIService', () => {
  let service: PokemonsAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonsAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
