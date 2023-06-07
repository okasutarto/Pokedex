<template>
  <span class="badge rounded-pill" :style="setBadgeColor(typeName)">
    {{ typeName }}
  </span>
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
