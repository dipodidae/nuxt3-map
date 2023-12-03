<script setup lang="ts">
import { useStore } from '../store'

const props = defineProps<{
  location: WordpressLocation
}>()

const { activeLocation } = useStore()

const isActive = computed(() => {
  return props.location.id === activeLocation.value?.id
})
</script>

<template>
  <MapLocationsMarkerInfoWindow v-if="isActive" :location="props.location" />
  <MapLocationsMarkerPin v-else />
</template>

<style scoped>
.marker {
  border-radius: .25em;
  padding:.5em;
  background: #fff;
  box-shadow: #333333 0 0 1em;
  color: #333;
}
</style>
