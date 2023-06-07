import { defineStore } from 'pinia'

export const usePokemonStore = defineStore({
  id: 'pokemonStore',
  state: () => ({
    pokemon: {}
  }),
  actions: {}
})
