import { Component, OnInit } from '@angular/core';
/*import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';*/


@Component({//décorateur typeScript
  selector: 'app-root',
  templateUrl: 'app.component.html'

      
})   
export class AppComponent {
  
}
/*export class AppComponent implements OnInit() {
  title = 'ng-pokemon-app';
 
  pokemonList: Pokemon[] = POKEMONS;// typescript: variable de type tableau de pokemon(objet)
  pokemonSelected: Pokemon|undefined;

  ngOnInit() {
      console.table(this.pokemonList);
      
  }
  selectPokimon(pokemonId:String) {
    //let id= +pokemonId ;
    
    //this.pokemonSelected = this.pokemonList[id];
    //console.log(`Vous avez cliqué sur le pokemon ${this.pokemonList[id].name}`);
    const pokemon: Pokemon|undefined= this.pokemonList.find(pokemon => pokemon.id == +pokemonId);
    if(pokemon){
    console.log(`Vous avez cliqué sur le pokemon ${pokemon.name}`);
    this.pokemonSelected = pokemon;
    }
    else{
      console.log('pokemon introuvable');
    }

  }
  
  /*selectPokimon(event:MouseEvent) {
    let id: number;
    id = Number((event.target as HTMLInputElement).value);
    this.pokemonSelected = this.pokemonList[id];
    console.log(`Vous avez cliqué sur le pokemon ${this.pokemonList[id].name}`);
    
  }*/
