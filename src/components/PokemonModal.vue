<template>
  <div
    class="modal fade"
    tabindex="-1"
    :id="pokemon.species ? pokemon.species.name : ''"
    aria-labelledby="pokemonDetailsModal"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="d-flex justify-content-end p-2">
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body row row-cols-2">
          <div>
            <h5 v-if="pokemon.species" class="modal-title text-center fw-bold mb-2">
              {{ pokemon.species.name.charAt(0).toUpperCase() + pokemon.species.name.slice(1) }}
            </h5>
            <button
              class="border border-0 bg-transparent p-0"
              data-bs-toggle="modal"
              :data-bs-target="'#' + (pokemon ? pokemon.id : '')"
            >
              <img
                v-if="pokemon.sprites"
                :src="pokemon.sprites.other['official-artwork'].front_default"
                class="card-img-top"
                alt="..."
              />
            </button>
          </div>
          <div v-if="flavor_text" class="d-flex flex-column">
            <p>
              {{ flavor_text }}
            </p>
            <p class="fw-semibold fs-5">Type</p>
            <div class="d-flex justify-content-center">
              <Badge
                class="w-50"
                v-for="(type, index) in pokemon.types"
                :key="index"
                :typeName="type.type.name"
                :colours="colours"
                @filter-pokemon-by-type="$emit('filterPokemonByType', type.type.name)"
              />
            </div>
          </div>
        </div>
        <div class="modal-body row row-cols-2 pt-0 pr-0 pb-1 ml-1 fs-5">
          <p class="fw-semibold m-0">Base Stats</p>
        </div>
        <div class="modal-body row row-cols-2 pt-0 mt-0">
          <div v-for="stats in pokemon.stats" class="pb-2">
            <p class="m-1">
              {{ stats.stat.name.charAt(0).toUpperCase() + stats.stat.name.slice(1) }}
            </p>
            <div
              class="progress"
              role="progressbar"
              aria-label="Animated striped example"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                class="progress-bar progress-bar-striped progress-bar-animated"
                :style="{ width: stats.base_stat + '%' }"
              >
                {{ stats.base_stat }}
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button
            @click="$emit('favPokemonHandler')"
            type="button"
            class="btn ms-1 border-0"
            :class="[isFav ? 'bg-success' : 'bg-secondary']"
          >
            <i class="bi text-white" :class="[isFav ? 'bi-heart-fill' : 'bi-heart']"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Badge from './Badge.vue'

export default {
  components: {
    Badge
  },
  props: {
    pokemon: Object,
    flavor_text: String,
    colours: Object,
    isFav: Boolean
  }
}
</script>
