import { defineStore } from 'pinia'

export const usePokemonStore = defineStore({
  id: 'pokemonStore',
  state: () => ({
    favPokemons: 0,
    favPokemonsList: []
  }),
  actions: {}
})
