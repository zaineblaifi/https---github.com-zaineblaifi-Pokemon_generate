import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  
  
})
export class DetailPokemonComponent implements OnInit{
  pokemonList: Pokemon[];
  pokemon: Pokemon|undefined;
  constructor(private route: ActivatedRoute, private router: Router,
    private PokemonService: PokemonService) { 

  }

  ngOnInit() {
    this.pokemonList= this.PokemonService.getPokemonList();
    
    const pokemonId: string|null= this.route.snapshot.paramMap.get('id');
    if(pokemonId){
      this.pokemon= this.PokemonService.getPokemonById(pokemonId);
    }
  }
  goToPokemonList(){
    this.router.navigate(['/pokemons']);
  }
  goToEditPokemon(pokemon: Pokemon){
    this.router.navigate(['/editer/pokemon', pokemon.id]);
  }
}