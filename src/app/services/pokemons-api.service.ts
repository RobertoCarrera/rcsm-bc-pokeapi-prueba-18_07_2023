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

  constructor(private http: HttpClient) { }

  getPokemons(){

    return this.http.get(this.apiURL);
  }

  getPokemonsFiltered(): Observable<Pokemon[]>{

    return this.http.get<Pokemon[]>(this.apiURL).pipe(
      map(response =>{
        return response.map(response=>{
          return{
            id: response.id, 
            name: response.name,
            front_default: response.front_default
          }
        })
      })
    );
  }
}
