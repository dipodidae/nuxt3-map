<script setup lang="ts">
const { mergedCategories, queryNoResults } = useMapStore()!
</script>

<template>
  <div class="ongehoord-map-list overflow-auto bg-stone-900 text-stone-50 ">
    <div class="p-5 sticky top-0 bg-stone-900/50 backdrop-blur-md border-b border-stone-700">
      <OngehoordMapListSearch />
    </div>
    <OngehoordMapListCategory
      v-for="category in mergedCategories"
      :key="category.key"
      :category="category"
    />
    <OngehoordMapListEmptyState v-show="queryNoResults" />
  </div>
</template>
