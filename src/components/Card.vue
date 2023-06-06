<template>
  <div class="col">
    <div class="card text-center" style="width: 18rem">
      <img
        v-if="pokemon.sprites"
        :src="pokemon.sprites.other.home.front_default"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 v-if="pokemon.species" class="card-title">{{ pokemon.species.name }}</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the bulk of the card's
          content.
        </p>
        <a href="#" class="btn btn-primary">Details</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  data() {
    return {
      pokemon: {}
    }
  },
  props: ['url'],
  methods: {
    async fetchPokemon() {
      try {
        const response = await axios.get(this.url)
        this.pokemon = response.data
        // console.log(response.data)
        // console.log(this.pokemon.sprites.other.home.front_default)
      } catch (error) {
        console.log(error)
      }
    }
  },
  mounted() {
    this.fetchPokemon()
  }
}
</script>
