<template>
  <div class="col">
    <div class="card text-center border-0">
      <button
        class="border border-0 bg-transparent p-0"
        data-bs-toggle="modal"
        :data-bs-target="'#' + (pokemon ? pokemon.id : '')"
      >
        <img
          v-if="pokemon.sprites"
          :src="pokemon.sprites.other['official-artwork'].front_default"
          class="card-img-top card-img-bottom rounded-3"
          alt="..."
          :style="SetCardColour()"
        />
      </button>
      <div class="card-body border-0">
        <h5 v-if="pokemon.species" class="card-title">
          {{ pokemon.species.name.charAt(0).toUpperCase() + pokemon.species.name.slice(1) }}
        </h5>
        <div class="card-text mb-3">
          <Badge
            v-for="(type, index) in pokemon.types"
            :typeName="type.type.name"
            :colours="colours"
            :key="index"
            @filter-pokemon-by-type="$emit('filterPokemonByType', type.type.name)"
          />
        </div>
        <div class="d-flex justify-content-between">
          <div class="">
            <button
              @click.prevent="fetchPokemonSpecies()"
              type="button"
              class="btn btn-primary me-1"
              data-bs-toggle="modal"
              :data-bs-target="'#' + (pokemon.species ? pokemon.species.name : '')"
            >
              Details
            </button>
          </div>
          <button
            @click="favPokemonHandler()"
            type="button"
            class="btn ms-1 border-0"
            :class="[isFav ? 'bg-success' : 'bg-secondary']"
          >
            <i class="bi text-white" :class="[isFav ? 'bi-heart-fill' : 'bi-heart']"></i>
          </button>
        </div>
      </div>
    </div>
    <PokemonModal
      :flavor_text="pokemonSpecies"
      :colours="colours"
      :pokemon="pokemon"
      :is-Fav="isFav"
      @fav-pokemon-handler="favPokemonHandler"
    />
    <ImageModal :pokemon="pokemon" />
  </div>
</template>

<script>
import PokemonModal from './../components/PokemonModal.vue'
import ImageModal from './../components/ImageModal.vue'
import { usePokemonStore } from '../plugins/pinia/index'
import Badge from './Badge.vue'
import axios from 'axios'

export default {
  setup() {
    const pokemonStore = usePokemonStore()

    return { pokemonStore }
  },
  name: 'Card',
  components: {
    PokemonModal,
    Badge,
    ImageModal
  },
  props: {
    url: String,
    colours: Object
  },
  data() {
    return {
      pokemon: {}, // Store the fetched Pokemon data
      pokemonSpecies: null,
      isFav: false
    }
  },
  methods: {
    async fetchPokemon() {
      try {
        const response = await axios.get(this.url)
        this.pokemon = response.data
      } catch (error) {
        console.log(error)
      }
    },
    async fetchPokemonSpecies() {
      try {
        const response = await axios.get(this.pokemon.species.url)
        this.pokemonSpecies = response.data.flavor_text_entries[0].flavor_text
      } catch (error) {
        console.error('Error fetching Pokemon species:', error)
      }
    },
    SetCardColour() {
      const colours = Object.keys(this.colours)
      for (const colour of colours) {
        if (this.pokemon.types[0].type.name === colour) {
          return `background-color:${this.colours[colour]}`
        }
      }
      return ''
    },
    favPokemonHandler() {
      if (!this.isFav) {
        this.isFav = !this.isFav
        this.pokemonStore.favPokemonsList.push(this.url)
        localStorage.setItem('favPokemonList', JSON.stringify(this.pokemonStore.favPokemonsList))
        this.pokemonStore.favPokemons++
        localStorage.setItem('favPokemonTotal', this.pokemonStore.favPokemons)
      } else {
        this.pokemonStore.favPokemons--
        localStorage.setItem('favPokemonTotal', this.pokemonStore.favPokemons)
        this.pokemonStore.favPokemonsList.splice(
          this.pokemonStore.favPokemonsList.indexOf(this.url),
          1
        )
        localStorage.setItem('favPokemonList', JSON.stringify(this.pokemonStore.favPokemonsList))
        this.isFav = !this.isFav
      }
    },
    checkIsFav() {
      this.pokemonStore.favPokemonsList.forEach((url) => {
        if (url === this.url) {
          this.isFav = true
        }
      })
    }
  },
  mounted() {
    this.fetchPokemon()
    this.checkIsFav()
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');

/* Additional styles for your component */
</style>
