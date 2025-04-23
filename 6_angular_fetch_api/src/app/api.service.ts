import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=10';

  constructor() {}

  async getItems(): Promise<any[]> {
    const response = await fetch(this.apiUrl);
    const data = await response.json();
    const results = data.results;

    const detailedPokemon = await Promise.all(
      results.map(async (pokemon: any) => {
        const res = await fetch(pokemon.url);
        const details = await res.json();

        return {
          id: details.id,
          name: details.name,
          image: details.sprites.front_default,
          base_experience: details.base_experience,
          height: details.height,
          weight: details.weight,
          abilities: details.abilities.map((a: any) => a.ability.name),
          types: details.types.map((t: any) => t.type.name),
        };
      })
    );

    return detailedPokemon;
  }
}
