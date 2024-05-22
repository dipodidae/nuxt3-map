<script setup lang="ts">
const props = defineProps<{
  video: string
}>()
</script>

<template>
  <div class="aspect-video">
    {{ props.video }}
  </div>
</template>
