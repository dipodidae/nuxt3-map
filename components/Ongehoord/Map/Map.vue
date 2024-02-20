<script setup lang="ts">
import { GoogleMap } from 'vue3-google-map'

const initialZoom = 8

const center = { lat: 52.338497, lng: 5.652597 }

const { queriedLocations, zoom, activeLocation } = useMapStore()

const map = ref()

function setZoom() {
  zoom.value = map.value.map.getZoom()
}

function resetMap() {
  map.value.map.panTo(center)
  map.value.map.setZoom(initialZoom)
}

watch(activeLocation, (location) => {
  if (location) {
    map.value.map.panTo(location.position)
    map.value.map.setZoom(12)
  }
  else {
    resetMap()
  }
})
</script>

<template>
  <GoogleMap
    ref="map"
    api-key="AIzaSyBoCZRX83XtUER15vtCzjIo6fl1oSx7kSw"
    :center="center"
    :zoom="initialZoom"
    :map-type-control="false"
    :street-view-control="false"
    :fullscreen-control="false"
    map-id="459ac89d964cd5c8"
    :clickable-icons="false"
    @zoom_changed="setZoom"
  >
    <OngehoordMapMarker v-for="location in queriedLocations" :key="location.id" :location="location" />
  </GoogleMap>
</template>
