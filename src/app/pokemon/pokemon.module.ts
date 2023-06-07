import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { RouterModule, Routes } from '@angular/router';

const pokemonRoutes: Routes = [
  
    {path: 'pokemons', component: ListPokemonComponent},
    {path :'pokemon/:id', component: DetailPokemonComponent},
  
];

@NgModule({
  declarations: [
    ListPokemonComponent,
    BorderCardDirective,
    PokemonTypeColorPipe,
    DetailPokemonComponent
    
  ],
  imports: [
    CommonModule, //les directives ngIf et ngFor
    RouterModule.forChild(pokemonRoutes)//configurer les routes spécifiques à un module particulier.
  ]
})
export class PokemonModule { }
