<script setup lang="ts">
const props = defineProps<{
  location: WordpressLocation
}>()

const { zoom } = useMapStore()

function getCategory() {
  const category = props.location.categories?.at(0)?.key

  if (!category)
    return 'uncategorized'

  if (category === 'unknown')
    return 'uncategorized'

  return category
}

const category = getCategory()

if (category === 'uncategorized')
  console.warn('Uncategorized location:', props.location)

const image = `/images/markers/${category}.svg`

const width = computed(() => {
  if (zoom.value < 8)
    return 20

  if (zoom.value < 10)
    return 30

  return 40
})
</script>

<template>
  <div class="isolate relative flex items-center justify-center">
    <NuxtImg :src="image" :width="width" class="cursor-pointer relative z-10" />
    <NuxtImg src="/images/markers/shadow.svg" class="absolute bottom-[-7px] z-0" :width="width" />
  </div>
</template>
