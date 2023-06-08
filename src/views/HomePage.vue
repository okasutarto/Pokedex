<template>
  <div class="layout layout__main--background">
    <div
      class="d-flex flex-column justify-content-center align-items-center text-center text-white pt-5 mt-5"
    >
      <div class="container pb-5">
        <h1 class="display-1">Welcome to the Pokédex</h1>
        <p class="lead fs-2">Catch 'em all and become a Pokémon Master!</p>
        <router-link to="/dashboard">
          <button class="btn btn-primary btn-lg shadow">Start Exploring</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Homepage',
  methods: {}
}
</script>
