import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Pokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonsAPIService {

  apiURL = "https://pokeapi.co/api/v2/pokemon/1";
  pokemons = [];
  totalPokemons;

  constructor(private http: HttpClient) { 

    this.totalPokemons = this.getCount();
  }

  getPokemons(){

    return this.http.get(this.apiURL);
  }

  getPokemonsFiltered(): Observable<Pokemon>{

    return this.http.get<Pokemon>(this.apiURL).pipe(
      map(response =>{
        return{
          id: response.id, 
          name: response.name.charAt(0).toUpperCase()+response.name.slice(1),
          sprites: response.sprites,
          abilities: response.abilities,
          weight: response.weight,
          height: response.height
        }
      })
    );
  }

  getCount() {
    return this.http.get(this.apiURL).pipe(

      map((response: any) => response.count)
    );
  }
}