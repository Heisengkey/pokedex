import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonListResponse {
  count: string;
  next: string;
  previous: string;
  results: Pokemon[];
}

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private http: HttpClient) {}

  nextPage!: string;
  previousPage!: string;
  count!: string;

  getCount() {
    return this.http.get<PokemonListResponse>(
      environment.APIURL + 'pokemon' + '?limit=151'
    );
  }

  getPokemon() {
    return this.http.get<PokemonListResponse>(
      environment.APIURL + 'pokemon' + '?limit=151'
    );
  }
}
