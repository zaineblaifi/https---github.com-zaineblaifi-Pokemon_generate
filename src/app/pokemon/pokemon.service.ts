import { Injectable } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root' //on va utiliser la meme instance de service sur toute l'application
})
export class PokemonService {
  getPokemonList(): Pokemon[] {
    return POKEMONS;
  }
  getPokemonById(pokemonId: string): Pokemon|undefined {
    return POKEMONS.find(pokemon => pokemon.id == +pokemonId);
  }
  getPokemonTypeLise(): string[]{
    //string[][]return POKEMONS.map(pokemon => pokemon.types);
    //ou string [] return POKEMONS.flatMap(pokemon => pokemon.types);
    return ['Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 
    'Electrik', 'Poison', 'Fée', 'Vol', 'Combat', 'Psy' ];
  }
  constructor() { }
}
