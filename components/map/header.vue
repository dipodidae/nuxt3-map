<script lang="ts" setup>
import { useStore } from './store'

const { searchString } = useStore()
</script>

<template>
  <header>
    <h2>
      <span>
        Locations
      </span>
    </h2>
    <input v-model="searchString" type="search" placeholder="Search locations">
  </header>
</template>
