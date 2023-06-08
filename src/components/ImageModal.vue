<template>
  <div class="modal fade" tabindex="-1" :id="pokemon ? pokemon.id : ''">
    <div class="modal-dialog modal-sm modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content modal-sm">
        <div class="modal-header d-flex flex-column">
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
          <div class="modal-body row row-cols-1">
            <img
              v-if="pokemon.sprites"
              :src="pokemon.sprites.other['official-artwork'].front_default"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pokemon: Object
  }
}
</script>
