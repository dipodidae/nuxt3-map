<script setup lang="ts">
const props = defineProps<{
  location: WordpressLocation
}>()

const { toggleLocation } = useMapStore()
</script>

<template>
  <a href="#" class="flex min-h-12 justify-center items-center gap-2 py-2 px-5 hover:bg-stone-700" :class="{ 'bg-pink-900 hover:bg-pink-950': props.location.active }" @click="toggleLocation(location)">
    <span v-if="props.location.meta['company-owner']">{{ props.location.meta['company-owner'] }}</span>
    <span v-if="props.location.meta['company-name']" :class="{ 'text-stone-500': props.location.meta['company-owner'] }">{{ props.location.meta['company-name'] }}</span>
    <OngehoordMapListLocationMetaBadges :location="props.location" class="ml-auto shrink" />
  </a>
</template>
