import { Component, OnInit } from '@angular/core';

import { Pokemon, PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent implements OnInit {
  pokemons!: Pokemon[];

  constructor(private pokeService: PokemonService) {}

  ngOnInit(): void {
    this.pokeService.getPokemon().subscribe((data) => {
      console.log(data.results);
    });
  }
}
