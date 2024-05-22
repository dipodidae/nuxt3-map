<script setup lang="ts">
const props = defineProps<{
  location: WordpressLocation
}>()

const { toggleLocation } = useMapStore()!
</script>

<template>
  <a href="#" class="flex flex-col p-4 hover:bg-pink-950 gap-2" :class="{ 'bg-pink-900 hover:bg-pink-950': props.location.active }" @click="toggleLocation(location)">
    <div v-if="props.location.meta['company-owner']">{{ props.location.meta['company-owner'] }}</div>
    <div v-if="props.location.meta['company-name']" :class="{ 'text-pink-300': props.location.active }">{{ props.location.meta['company-name'] }}</div>
    <OngehoordMapListLocationMetaBadges :location="props.location" class="ml-auto shrink" />
  </a>
</template>
