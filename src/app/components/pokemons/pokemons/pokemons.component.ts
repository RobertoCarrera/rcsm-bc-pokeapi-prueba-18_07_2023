import { Component } from '@angular/core';
import { PokemonsAPIService } from 'src/app/services/pokemons-api.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent {

  pokemon: any = [];

  constructor(private pokemons: PokemonsAPIService){}

  ngOnInit(){

    this.pokemons.getPokemonsFiltered().subscribe(
      res => this.pokemon = res
    );
  }
}
