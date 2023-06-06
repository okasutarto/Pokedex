<template>
  <div class="row row-cols-1 row-cols-md-5 g-4 p-5">
    <Card v-for="pokemons in pokemons.results" :url="pokemons.url" />
  </div>
</template>

<script>
import Card from './../components/Card.vue'
export default {
  components: {
    Card
  },
  data() {
    return {
      pokemons: {}
    }
  },
  methods: {
    async fetchAllPokemon() {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon')
        this.pokemons = response.data
        console.log(this.pokemons)
      } catch (error) {
        console.log(error)
      }
    }
  },
  mounted() {
    this.fetchAllPokemon()
  }
}
</script>
