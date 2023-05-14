import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';

@NgModule({
  declarations: [AppComponent, TopBarComponent, PokemonListComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatToolbarModule,
    RouterModule.forRoot([{ path: '', component: PokemonListComponent }]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
