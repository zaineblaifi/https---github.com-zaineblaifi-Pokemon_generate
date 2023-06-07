import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { RouterModule, Routes } from '@angular/router';
import { TypesListComponent } from './types-list/types-list.component';

const pokemonRoutes: Routes = [
  
    {path: 'pokemons', component: ListPokemonComponent},
    {path :'pokemon/:id', component: DetailPokemonComponent},
    {path :'types', component: TypesListComponent}
  
];

@NgModule({
  declarations: [
    ListPokemonComponent,
    BorderCardDirective,
    PokemonTypeColorPipe,
    DetailPokemonComponent,
    TypesListComponent
    
  ],
  imports: [
    CommonModule, //les directives ngIf et ngFor
    RouterModule.forChild(pokemonRoutes)//configurer les routes spécifiques à un module particulier.
  ]
})
export class PokemonModule { }
