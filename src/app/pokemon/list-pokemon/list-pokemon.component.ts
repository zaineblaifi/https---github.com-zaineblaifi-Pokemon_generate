import { Component } from '@angular/core';
import { Pokemon } from '../pokemon';
import { POKEMONS } from '../mock-pokemon-list';
import { Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styles: [
  ]
})
export class ListPokemonComponent {
  pokemonList: Pokemon[] ;

  constructor(private router : Router,
    private PokemonService: PokemonService){}
  
  ngOnInit(){
    this.pokemonList = this.PokemonService.getPokemonList();
  }
  goToDetail(pokemon : Pokemon) {
    this.router.navigate(['/pokemon', pokemon.id]);
}
}
