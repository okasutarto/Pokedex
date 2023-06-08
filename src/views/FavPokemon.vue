<template>
  <div class="row row-cols-1 row-cols-md-4 row-cols-lg-6 g-4 p-5">
    <Card
      v-for="pokemons in pokemonStore.favPokemonsList"
      :key="pokemons"
      :url="pokemons"
      :colours="colours"
    />
  </div>
  <p
    v-if="pokemonStore.favPokemonsList.length === 0"
    class="d-flex justify-content-center fs-2 fw-semibold"
  >
    Looks like you haven't caught any Pokémon yet!
  </p>
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
  },
  data() {
    return {
      colours: {
        normal: '#A8A77A',
        fire: '#EE8130',
        water: '#6390F0',
        electric: '#F7D02C',
        grass: '#7AC74C',
        ice: '#96D9D6',
        fighting: '#C22E28',
        poison: '#A33EA1',
        ground: '#E2BF65',
        flying: '#A98FF3',
        psychic: '#F95587',
        bug: '#A6B91A',
        rock: '#B6A136',
        ghost: '#735797',
        dragon: '#6F35FC',
        dark: '#705746',
        steel: '#B7B7CE',
        fairy: '#D685AD',
        unknown: '#68a090',
        shadow: '#696969'
      }
    }
  }
}
</script>
