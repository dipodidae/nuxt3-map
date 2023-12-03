<script setup lang="ts">
import { useStore } from '../store'

const props = defineProps<{
  location: WordpressLocation
}>()

const meta = computed(() => {
  return props.location.meta
})

const { activeLocation } = useStore()

function isActive(location: WordpressLocation): boolean {
  return location.id === activeLocation.value?.id
}

function toggleActive(location: WordpressLocation) {
  activeLocation.value = !isActive(location) ? location : null
}
</script>

<template>
  <div class="map-locations-location" :class="{ 'is-active': isActive(props.location) }" @click="toggleActive(location)">
    <header>
      <div v-if="meta['company-name']" class="header-part company-name">
        {{ meta['company-name'] }}
      </div>
      <div v-if="meta['company-owner']" class="header-part company-owner">
        {{ meta['company-owner'] }}
      </div>
      <div v-if="meta['quality-brand']" class="header-part quality-brand">
        {{ meta['quality-brand'] }}
      </div>
    </header>
    <div class="address">
      {{ props.location.meta.address }}
    </div>
  </div>
</template>

<style scoped>
.map-locations-location {
  display:flex;
  flex-direction: column;
  background: linear-gradient(45deg, #f1f1f1 50%, #fff 50%);
  padding:1em;
  border-bottom:1px solid magenta;
}

header {
  gap: 1em;
  display:flex;
}

.header-part {
  padding:.5em;
  border:1px solid magenta;
}
</style>
