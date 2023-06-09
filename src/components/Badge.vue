<template>
  <button @click="$emit('filterPokemonByType', typeName)" class="border-0 p-0 bg-transparent">
    <span class="badge rounded-pill fs-6 fw-normal" :style="setBadgeColor(typeName)">
      {{ typeName }}
    </span>
  </button>
</template>

<script>
export default {
  props: {
    typeName: String,
    colours: Object
  },
  methods: {
    setBadgeColor(typeName) {
      const colours = Object.keys(this.colours)

      for (const colour of colours) {
        if (typeName === colour) {
          return `background-color:${this.colours[colour]};margin:0.25rem`
        }
      }

      return ''
    }
  }
}
</script>
