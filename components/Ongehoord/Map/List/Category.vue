<script setup lang="ts">
const props = defineProps<{
  category: LocationCategory
}>()

const { query } = useMapStore()

function toggleFilterByCategory(category: LocationCategory) {
  if (query.value === category.label)
    query.value = ''
  else
    query.value = category.label
}
</script>

<template>
  <div v-show="category.visible" class="ongehoord-map-list-category">
    <a href="#" class="flex hover:bg-stone-700 p-5 border-b border-stone-400 text-stone-300" @click="toggleFilterByCategory(props.category)">
      {{ props.category.label }}
    </a>
    <ul>
      <li v-for="location in props.category.locations" v-show="location.visible" :key="`${props.category.key}-${location.id}`">
        <OngehoordMapListLocation :location="location" />
      </li>
    </ul>
  </div>
</template>
