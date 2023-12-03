function isMatchingQuery(location: WordpressLocation, searchString: string) {
  return location.title.rendered.toLowerCase().includes(searchString.toLowerCase())
}

const [useProvideStore, useStore] = createInjectionState(() => {
  const { locations } = useLocationsStore()
  const { categories } = useCategoryStore()

  const activeLocation = ref()
  const searchString = ref('')

  const filteredLocations = computed(() => {
    return locations.map((location) => {
      return {
        ...location,
        visible: isMatchingQuery(location, searchString.value),
      }
    })
  })

  const categorizedLocations = computed(() => {
    return categories.map((category) => {
      return {
        ...category,
        locations: filteredLocations.value.filter((location) => {
          return location.meta.categories.includes(category.key)
        }),
      }
    })
  })

  return {
    activeLocation,
    categorizedLocations,
    locations: filteredLocations,
    searchString,
  }
})

export { useStore, useProvideStore }
