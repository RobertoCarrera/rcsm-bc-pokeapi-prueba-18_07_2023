import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonsDetalleComponent } from './pokemons-detalle.component';

describe('PokemonsDetalleComponent', () => {
  let component: PokemonsDetalleComponent;
  let fixture: ComponentFixture<PokemonsDetalleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonsDetalleComponent]
    });
    fixture = TestBed.createComponent(PokemonsDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
