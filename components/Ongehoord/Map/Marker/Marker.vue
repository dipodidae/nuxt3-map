<script setup lang="ts">
import { CustomMarker } from 'vue3-google-map'

const props = defineProps<{
  location: WordpressLocation
}>()

const { toggleLocation, activeLocation } = useMapStore()

const dim = computed(() => activeLocation.value?.id && !props.location.active)
</script>

<template>
  <CustomMarker :options="{ position: props.location.position, anchorPoint: 'BOTTOM_CENTER' }">
    <div class="flex flex-col gap-2 isolate">
      <OngehoordMapMarkerInfoWindow v-show="props.location.active && props.location.visible" :location="props.location" />
      <OngehoordMapMarkerImage v-show="props.location.visible" :location="props.location" :class="{ 'opacity-50': dim }" @click="toggleLocation(props.location)" />
    </div>
  </CustomMarker>
</template>
