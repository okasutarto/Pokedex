<template>
  <div
    class="fs-1 fw-semibold d-flex pe-5 ps-5 justify-content-center align-items-center text-center mt-4"
  >
    Explore the World of Pokémon !
  </div>
  <div class="fs-4 fw-semibold d-flex mt-4 ps-5">Filter by type :</div>
  <div
    class="row-cols-md-auto row-cols-sm-auto row-cols-lg-auto ps-5 pe-5 ps-lg-5 pt-3 pe-lg-2 ps-md-5 pe-md-5 ps-sm-5"
  >
    <Badge
      class=""
      v-for="type in typeList"
      :key="type.name"
      :typeName="type.name"
      :colours="colours"
      @filter-pokemon-by-type="filterPokemonByType"
    />
  </div>
  <div class="row row-cols-1 row-cols-md-4 row-cols-lg-6 g-4 p-5">
    <Card
      v-for="(pokemon, index) in pokemonList"
      :key="pokemon.name"
      :url="pokemon.url"
      :colours="colours"
      @filter-pokemon-by-type="filterPokemonByType"
    />
    <div id="scroll-target"></div>
  </div>
  <div
    v-if="pokemonList.length === 0"
    class="fs-4 d-flex justify-content-center align-content-center"
  >
    <p>No Pokémon Found in this category</p>
  </div>
</template>

<script>
import axios from 'axios'
import Card from './../components/Card.vue'
import Badge from './../components/Badge.vue'

export default {
  components: {
    Card,
    Badge
  },
  data() {
    return {
      pokemonList: [], // Array to store the fetched data
      nextUrl: 'https://pokeapi.co/api/v2/pokemon?offset=20&limit=20', // URL for the next set of data
      isLoading: false, // Flag to track if a request is in progress
      typeList: [],
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
        shadow: '#696969',
        All: '#0d6efd'
      }
    }
  },
  methods: {
    async fetchNextData() {
      if (this.isLoading) return // Prevent multiple simultaneous requests
      this.isLoading = true // Set the loading flag to true

      try {
        const response = await axios.get(this.nextUrl)

        // Update the data array with the new results
        this.pokemonList = [...this.pokemonList, ...response.data.results]

        // Update the URL for the next set of data
        this.nextUrl = response.data.next
      } catch (error) {
        console.error(error)
      }

      this.isLoading = false // Set the loading flag back to false
    },
    async fetchAllPokemon() {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon')
        this.pokemonList = response.data.results
        this.nextUrl = response.data.next
      } catch (error) {
        console.log(error)
      }
    },
    async fetchAllType() {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/type/')
        this.typeList = response.data.results
        this.typeList.unshift({
          name: 'All',
          url: 'https://pokeapi.co/api/v2/pokemon'
        })
      } catch (error) {
        console.log(error)
      }
    },
    async filterPokemonByType(type) {
      try {
        if (type === 'All') {
          this.isLoading = false
          this.fetchAllPokemon()
        } else {
          this.isLoading = true
          const response = await axios.get(`https://pokeapi.co/api/v2/type/${type}`)

          this.pokemonList = response.data.pokemon.map((pokemon) => {
            return pokemon.pokemon
          })
        }
        // console.log('filter')
      } catch (error) {
        console.log(error)
      }
    }
  },
  mounted() {
    this.fetchAllPokemon()
    this.fetchAllType()

    // if (!this.isLoading) {
    const options = {
      root: null, // Use the viewport as the root element
      rootMargin: '0px',
      threshold: 1.0 // Trigger when the target element is fully visible
    }

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        this.fetchNextData() // Fetch the next set of data when the target element is intersecting
      }
    }, options)

    const target = document.querySelector('#scroll-target') // Identify the target element

    if (target) {
      observer.observe(target) // Start observing the target element
    }
    // }
  }
}
</script>
