<template>
  <nav class="navbar navbar-expand-lg sticky-top" style="background-color: #ff9524">
    <div class="container">
      <img
        class="navbar-brand"
        src="./../assets/img/pokedexlogo.png"
        alt="pokedex"
        width="110"
        height="50"
      />
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      ></button>
      <div class="collapse navbar-collapse justify-content-between" id="navbarNav">
        <ul class="navbar-nav ml-auto text-white">
          <li class="nav-item">
            <router-link to="/" style="text-decoration: none">
              <a class="nav-link text-white fs-3" href="#">Home</a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/dashboard" style="text-decoration: none">
              <a class="nav-link text-white fs-3" href="#">Pokémon</a>
            </router-link>
          </li>
        </ul>
        <router-link to="/favourite">
          <button class="button border-0 bg-transparent position-relative">
            <i class="bi bi-box2-heart-fill text-white fs-4">
              <span
                class="position-absolute top-1 start-100 translate-middle badge rounded-pill bg-primary fs-6"
              >
                {{ pokemonStore.favPokemons }}
              </span></i
            >
          </button>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import { usePokemonStore } from '../plugins/pinia/index'

export default {
  setup() {
    const pokemonStore = usePokemonStore()

    return { pokemonStore }
  }
}
</script>
