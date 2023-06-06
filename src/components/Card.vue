<template>
  <div class="col">
    <div class="card text-center" style="width: 18rem">
      <img src="..." class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
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
  props: {
    url: String
  },
  methods: {
    async fetchPokemon() {
      try {
        const response = await axios.get(this.url)
        console.log(response.data)
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
