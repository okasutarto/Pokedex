<template>
  <div class="modal" tabindex="-1" :id="pokemon ? pokemon.id : ''">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header d-flex flex-column">
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
          <div class="modal-body">
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
