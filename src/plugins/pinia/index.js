import { defineStore } from 'pinia'

export const usePokemonStore = defineStore({
  id: 'pokemonStore',
  state: () => ({
    favPokemons: JSON.parse(localStorage.getItem('favPokemonTotal')) || 0,
    favPokemonsList: JSON.parse(localStorage.getItem('favPokemonList')) || []
    // favPokemonsListStorage:
  }),
  actions: {}
})
