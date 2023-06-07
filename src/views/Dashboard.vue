<template>
  <div class="row row-cols-1 row-cols-md-4 row-cols-lg-6 g-4 p-5">
    <Card v-for="(pokemon, index) in pokemonList" :key="pokemon.name" :url="pokemon.url" />
    <div id="scroll-target"></div>
  </div>
</template>

<script>
import axios from 'axios'
import Card from './../components/Card.vue'

export default {
  components: {
    Card
  },
  data() {
    return {
      pokemonList: [], // Array to store the fetched data
      nextUrl: 'https://pokeapi.co/api/v2/pokemon?offset=20&limit=20', // URL for the next set of data
      isLoading: false // Flag to track if a request is in progress
    }
  },
  methods: {
    async fetchNextData() {
      if (this.isLoading) return // Prevent multiple simultaneous requests
      this.isLoading = true // Set the loading flag to true

      try {
        const response = await axios.get(this.nextUrl)
        const data = response.data

        // Update the data array with the new results
        this.pokemonList = [...this.pokemonList, ...data.results]

        // Update the URL for the next set of data
        this.nextUrl = data.next
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
    }
  },
  mounted() {
    this.fetchAllPokemon()

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
  }
}
</script>
