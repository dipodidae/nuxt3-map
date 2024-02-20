<script setup lang="ts">
const props = defineProps<{
  location: WordpressLocation
}>()

const metaProperties = [
  {
    key: 'stable-system',
    icon: 'i-heroicons-home-20-solid',
  },
  {
    key: 'quality-brand',
    icon: 'i-heroicons-star-20-solid',
  },
]
</script>

<template>
  <div class="flex gap-2">
    <OngehoordMapListLocationMetaBadge
      v-for="metaProperty in metaProperties"
      :key="metaProperty.key"
      :meta-property="metaProperty"
      :location="props.location"
    />
  </div>
</template>
