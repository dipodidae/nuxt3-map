<script setup lang="ts">
import { useStore } from '../store'

const { categorizedLocations } = useStore()
</script>

<template>
  <nav class="map-locations">
    <div v-for="category in categorizedLocations" :key="`category-${category.key}`" class="category">
      <header>
        <h4>{{ category.singular }}</h4>
      </header>
      <map-locations-location v-for="location in category.locations" :key="`location-${location.id}`" :location="location">
        {{ location.id }}
      </map-locations-location>
    </div>
  </nav>
</template>

<style scoped>
.map-locations {
  background:green;
  overflow: auto;
}

.is-active {
  background: red;
}
</style>
