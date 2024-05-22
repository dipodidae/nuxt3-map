<script setup lang="ts">
useProvideMapStore()
</script>

<template>
  <div class="ongehoord-map-container">
    <OngehoordMapList class="h-full" />
    <OngehoordMap class="h-full" />
  </div>
</template>

<style>
.ongehoord-map-container {
  width: 100dvw;
  height: 100dvh;
  background: brown;
  display: grid;
  grid-template-columns: minmax(50ch, 1fr) 3fr;
}
</style>
