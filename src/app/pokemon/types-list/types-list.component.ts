import { Component } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-types-list',
  template: `
    <div class='center'>
      <img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png"/>
      <h1>Liste de types</h1>
      <div class="list">
        <div *ngFor="let type of pokemon">
	          
          <h3>{{type}}</h3>
        </div>


      <a routerLink="/pokemons" class="waves-effect waves-teal btn-flat">
        Retourner à l' accueil
      </a> 
    </div>
  `,
  styles: [
  ]
})
export class TypesListComponent {
  pokemon: string[];
  constructor(private route: ActivatedRoute, private router: Router,
    private PokemonService: PokemonService) { 

  }
  ngOnInit() {
    
    
    
      this.pokemon= this.PokemonService.getPokemonTypeLise();
    
  }
  goToPokemonList(){
    this.router.navigate(['/pokemons']);
  }

}
