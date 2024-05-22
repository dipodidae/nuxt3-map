<script setup lang="ts">
const props = defineProps<{
  video: string
}>()
</script>

<template>
  <iframe :src="props.video" class="aspect-video" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen />
</template>
