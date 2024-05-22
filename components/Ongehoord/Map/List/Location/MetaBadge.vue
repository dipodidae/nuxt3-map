import type { UIcon } from '#build/components';
<script setup lang="ts">
const props = defineProps<{
  metaProperty: {
    key: string
    icon: string
  }
  location: WordpressLocation
}>()

const label = computed<string>(() => {
  return props.location.meta[props.metaProperty.key]
})
</script>

<template>
  <UBadge v-if="label" :ui="{ rounded: 'rounded-full' }" class="shrink-0 gap-1" size="xs">
    <UIcon :name="props.metaProperty.icon" />
    <span>{{ label }}</span>
  </UBadge>
</template>
