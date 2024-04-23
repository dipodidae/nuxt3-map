<script setup lang="ts">
const { mergedCategories, query, queryNoResults } = useMapStore()
</script>

<template>
  <div class="ongehoord-map-list overflow-auto bg-stone-900 text-stone-50 ">
    <div class="p-5 sticky top-0 bg-stone-900/50 backdrop-blur-md border-b border-stone-700">
      <UInput
        v-model="query"
        name="query"
        placeholder="Search..."
        icon="i-heroicons-magnifying-glass-20-solid"
        autocomplete="off"
        :ui="{ icon: { trailing: { pointer: '' } } }"
      >
        <template #trailing>
          <UButton
            v-show="query !== ''"
            color="gray"
            variant="link"
            icon="i-heroicons-x-mark-20-solid"
            :padded="false"
            @click="query = ''"
          />
        </template>
      </UInput>
    </div>
    <OngehoordMapListCategory v-for="category in mergedCategories" :key="category.key" :category="category" />
    <div v-show="queryNoResults">
      No results
    </div>
  </div>
</template>
