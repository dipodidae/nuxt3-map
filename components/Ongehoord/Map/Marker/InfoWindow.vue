<script setup lang="ts">
const props = defineProps<{
  location: WordpressLocation
}>()

const { toggleLocation } = useMapStore()

function close() {
  toggleLocation(props.location)
}
</script>

<template>
  <div class="bg-blue-400 w-[60ch]">
    <div class="border-b border-blue-200 flex justify-center items-center">
      <h2 class="text-blue-200">
        <span>{{ props.location.meta['company-owner'] }}</span>
        <span>{{ props.location.meta['company-name'] }}</span>
      </h2>
      <a href="#" class="ml-auto" @click="close">close</a>
    </div>
    <div class="bg-blue-300 aspect-video">
      test
    </div>
  </div>
</template>
