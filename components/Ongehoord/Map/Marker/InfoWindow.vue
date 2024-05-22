<script setup lang="ts">
const props = defineProps<{
  location: WordpressLocation
}>()

const { toggleLocation } = useMapStore()!

function close() {
  toggleLocation(props.location)
}
</script>

<template>
  <section class="bg-blue-400 w-[60ch]">
    <header class="border-b border-blue-200 flex justify-center items-center p-2">
      <h2 class="text-blue-200 text-lg">
        <span>{{ props.location.meta['company-owner'] }}</span>
        <span>{{ props.location.meta['company-name'] }}</span>
      </h2>
      <UButton icon="mdi:times" size="sm" class="ml-auto" color="pink" @click="close" />
    </header>
    <div class="p-2">
      <OngehoordVideo :video="props.location.meta.video" />
    </div>
  </section>
</template>
