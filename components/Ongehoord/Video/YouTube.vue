<script setup lang="ts">
const props = defineProps<{
  video: string
}>()

function getId(url: string): string {
  const match = url.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/)

  return match?.[2]?.length === 11 ? match[2] : ''
}

const embedUrl = computed(() => {
  const id = getId(props.video)

  return `https://www.youtube.com/embed/${id}`
})
</script>

<template>
  <iframe
    class="w-full h-full aspect-video"
    :src="embedUrl"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
  />
</template>
