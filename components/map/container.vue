<script setup>
import { useProvideStore } from './store.ts'

useProvideStore()
</script>

<template>
  <section>
    <map-header />
    <map-locations />
    <map-instance />
  </section>
</template>

<style scoped>
section {
  container-type: inline-size;
  display: grid;
  grid-template: auto 1fr / auto 1fr;
}

.controls {
  margin-left: auto;
}

section {
  height: 900px;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}

main {
  background:magenta;
}

.map-locations {
  width: 432px;
  grid-column: 1 / 2;
}

:deep(.map-instance) {
  grid-column: 2 / 2;

}

@container (width <= 700px) {
  .map-locations {
    display: none;
  }

  :deep(.map-instance) {
    grid-column: 2 / 2;
  }
}
</style>
