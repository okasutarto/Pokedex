<template>
  <div class="col">
    <div class="card text-center">
      <img
        v-if="pokemon.sprites"
        :src="pokemon.sprites.other.home.front_default"
        class="card-img-top"
        alt="..."
        :style="SetCardColour()"
      />
      <div class="card-body">
        <h5 v-if="pokemon.species" class="card-title">{{ pokemon.species.name }}</h5>
        <div class="card-text mb-3">
          <span
            class="badge rounded-pill"
            v-for="(type, index) in pokemon.types"
            :style="setBadgeColor(type.type.name)"
          >
            {{ type.type.name }}
          </span>
        </div>
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
      pokemon: {},
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
        fairy: '#D685AD'
      },
      badgeColors: []
    }
  },
  props: ['url'],
  methods: {
    async fetchPokemon() {
      try {
        const response = await axios.get(this.url)
        this.pokemon = response.data
      } catch (error) {
        console.log(error)
      }
    },

    SetCardColour() {
      const colours = Object.keys(this.colours)
      //   console.log(colours)

      for (const colour of colours) {
        if (this.pokemon.types[0].type.name === colour) {
          return `background-color:${this.colours[colour]}`
        }
      }

      return ''
    },

    setBadgeColor(typeName) {
      const colours = Object.keys(this.colours)

      for (const colour of colours) {
        if (typeName === colour) {
          return `background-color:${this.colours[colour]}`
        }
      }

      return ''
    }
  },
  mounted() {
    this.fetchPokemon()
  }
}
</script>
