import http from '@/utils/http';

// https://pokeapi.co/

export interface SPokemon {
  id: number;
  name: string;
}

export interface PokemonList {
  count: number;
  next: string;
  previous: string;
  results: Pokemon[];
}

export const queryList = (params: { offset: number; limit: number }) => {
  return http.get<PokemonList>('/api/v2/pokemon', { params });
};

export interface Pokemon {
  id: number;
  name: string;
  weight: number;
  height: number;
  types: string[];
  abilities: string[];
  stats: {
    hp: number;
    attack: number;
    defense: number;
    sp_atk: number;
    sp_def: number;
    speed: number;
  };
  sprites: {
    front_default: string;
    front_shiny: string;
    back_default: string;
    back_shiny: string;
  };
}

export const queryPokemon = (id: number) => {
  return http.get<Pokemon>(`/api/v2/pokemon/${id}`);
};

export const testPost = (id: number) => {
  return http.post(`/api/v2/pokemon/post/${id}`, { id });
};
