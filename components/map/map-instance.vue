<script setup lang="ts">
import { Loader } from '@googlemaps/js-api-loader'
import { createApp as vueCreateApp } from 'vue'

import type { ConcreteComponent } from 'vue'
import { useStore } from './store'

const { locations } = useStore()

const loader = new Loader({
  apiKey: useRuntimeConfig().public.keyGoogleMaps,
  version: 'weekly',
  libraries: ['places'],
})

const mapElement = ref<HTMLElement | null>()

async function loadMap(): Promise<google.maps.Map> {
  const { Map } = await loader.importLibrary('maps')

  return new Map(mapElement.value as HTMLElement, {
    center: { lat: 52.245839, lng: 5.778535 },
    zoom: 8,
    mapId: '66b7edc704efd76b',
  })
}

function renderMarkers(map: google.maps.Map, AdvancedMarkerElement: new(...args: any[]) => google.maps.marker.AdvancedMarkerElement): google.maps.marker.AdvancedMarkerElement[] {
  return locations.value.map((location: WordpressLocation) => {
    const element = getMarkerElement(location)

    vueCreateApp(getMarkerComponent(location)).mount(element)

    return new AdvancedMarkerElement({
      map,
      position: {
        lat: Number(location.meta['location-lat']),
        lng: Number(location.meta['location-lon']),
      },
      content: element,
    })
  })
}

function getMarkerComponent(location: WordpressLocation): ConcreteComponent {
  const Marker = resolveComponent('MapLocationsMarker')

  return Marker
}

function getMarkerElement(location: WordpressLocation): HTMLElement {
  const element = document.createElement('div')
  element.setAttribute(`data-location-${location.id}`, '')
  return element
}

const mounted = ref(false)

async function initialize() {
  const map = await loadMap()

  map.addListener('tilesloaded', () => {
    mounted.value = true
  })

  const AdvancedMarkerElement = await getMarkerLibrary()

  renderMarkers(map, AdvancedMarkerElement)
}

async function getMarkerLibrary() {
  const { AdvancedMarkerElement } = await loader.importLibrary('marker')

  return AdvancedMarkerElement
}

onMounted(() => {
  initialize()
})
</script>

<template>
  <div ref="mapElement" class="map-instance" />
</template>

<style>
.map-instance {
  background: linear-gradient(45deg, #f1f1f1 50%, #fff 50%);
}
</style>
