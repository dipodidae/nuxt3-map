import Fuse from 'fuse.js'

const [useProvideMapStore, useMapStore] = createInjectionState(() => {
  const query = ref('')

  const zoom = ref(7)

  const activeLocation = ref<WordpressLocation | null>()

  const { locations, categories } = useLocationStore()
  const fuse = new Fuse(locations, {
    threshold: 0.1,
    keys: [
      {
        name: 'meta.company-owner',
        weight: 0.7,
      },
      {
        name: 'meta.company-name',
        weight: 0.7,
      },
      {
        name: 'meta.quality-brand',
        weight: 0.7,
      },
      {
        name: 'meta.stable-system',
        weight: 0.7,
      },
      {
        name: 'categories.label',
        weight: 0.3,
      },
    ],
  })

  const fuseResult = computed(() => fuse.search(query.value))

  function isVisible(location: WordpressLocation) {
    if (!query.value)
      return true

    return fuseResult.value.some(({ item }) => item.id === location.id)
  }

  const queriedLocations = computed(() => {
    return locations.map((location) => {
      const visible = isVisible(location)

      const active = activeLocation.value?.id === location.id

      return {
        ...location,
        active,
        visible,
      }
    })
  })

  function getLocationsByCategory(locations: Ref<WordpressLocation[]>, category: LocationCategory): WordpressLocation[] {
    return locations.value.filter((location: WordpressLocation) => {
      if (!location.categories)
        return false

      return location.categories
        .some(locationCategory => locationCategory.key === category.key)
    }).sort((a, b) => {
      if (a.meta['company-owner'] < b.meta['company-owner'])
        return -1

      if (a.meta['company-owner'] > b.meta['company-owner'])
        return 1

      return 0
    })
  }

  const mergedCategories = computed<LocationCategory[]>(() => categories.map((category) => {
    const locations = getLocationsByCategory(queriedLocations, category)

    const visible = locations.some(location => location.visible)

    return {
      ...category,
      locations,
      visible,
    }
  }))

  function toggleLocation(location: WordpressLocation) {
    activeLocation.value = activeLocation.value?.id === location.id ? null : location
  }

  return { query, locations, categories, mergedCategories, toggleLocation, activeLocation, queriedLocations, zoom }
})

export { useProvideMapStore, useMapStore }
