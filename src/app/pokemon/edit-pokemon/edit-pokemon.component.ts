import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-pokemon',
  template: `
    <h2 class="center">Editer {{pokemon?.name}}</h2>
    <div *ngIf="pokemon">
      <p  class="center">
        <img src="{{pokemon.picture}}" alt="">
      </p>
      <app-pokemon-form [pokemon]="pokemon"></app-pokemon-form>
    </div>
  `,
  styles: [
  ]
})
export class EditPokemonComponent implements OnInit{
  pokemon: Pokemon|undefined;
  constructor(private pokemonService: PokemonService, 
    private route: ActivatedRoute) { }
  ngOnInit(): void {
      const pokemonId: string|null = this.route.snapshot.paramMap.get('id');
      if (pokemonId) {
        this.pokemon=this.pokemonService.getPokemonById(pokemonId);
      } else{
        this.pokemon= undefined;
      }
    }
}
