<script setup lang="ts">
const props = defineProps<{
  video: string
}>()

const service = computed(() => {
  if (props.video.match(/(youtube|youtu\.be)/))
    return 'youtube'
  else if (props.video.match(/vimeo/))
    return 'vimeo'
  else
    return 'unknown'
})
</script>

<template>
  <div class="aspect-video rounded border border-blue-200 w-full shadow shadow-blue-500 overflow-hidden">
    <OngehoordVideoVimeo v-if="service === 'vimeo'" :video="props.video" />
    <OngehoordVideoYouTube v-else-if="service === 'youtube'" :video="props.video" />
    <OngehoordVideoUnknown v-else :video="props.video" />
  </div>
</template>
