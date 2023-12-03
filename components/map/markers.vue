<script setup lang="ts">
const props = defineProps<{
  locations: WordpressLocation[]
}>()
</script>

<template>
  <ClientOnly>
    <Teleport v-for="location in props.locations" :key="`location-${location.id}`" :to="`[data-location-id-${location.id}]`">
      <MapLocationsMarker :location="location" />
    </Teleport>
  </ClientOnly>
</template>
