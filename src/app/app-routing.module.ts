import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PokemonsComponent } from './components/pokemons/pokemons/pokemons.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  { 
    path: '',   redirectTo: 'home', pathMatch: 'full'
  },
  { 
    path: 'pokemons', component: PokemonsComponent 
  },
  { 
    path: 'about', component: AboutComponent 
  },
  { 
    path: '**', component: HomeComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
