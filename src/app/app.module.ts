import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PokemonsComponent } from './components/pokemons/pokemons/pokemons.component';
import { PokemonsDetalleComponent } from './components/pokemons/pokemons-detalle/pokemons-detalle.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './utils/navbar/navbar.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PokemonsComponent,
    PokemonsDetalleComponent,
    LoginComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
