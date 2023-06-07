<template>
  <div class="row row-cols-1 row-cols-md-4 row-cols-lg-6 g-4 p-5">
    <Card v-for="pokemons in pokemonStore.favPokemonsList" :key="pokemons" :url="pokemons" />
  </div>
</template>

<script>
import Card from './../components/Card.vue'
import { usePokemonStore } from './../plugins/pinia/index'

export default {
  setup() {
    const pokemonStore = usePokemonStore()
    return { pokemonStore }
  },
  components: {
    Card
  }
}
</script>
