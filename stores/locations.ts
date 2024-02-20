import categoryData from '@/data/categories.json'

export const useLocationStore = defineStore('location', () => {
  const categories = reactive<LocationCategory[]>(categoryData)

  const categoryUnknown: LocationCategory = categoryData.find(category => category.key === 'unknown')!

  function getCategories(location: WordpressLocation): LocationCategory[] {
    if (!location.meta?.categories)
      return [categoryUnknown]

    return location.meta.categories.map(category => getCategory(category))
  }

  function getCategory(key: string): LocationCategory {
    return categories.find(category => category.key === key) ?? categoryUnknown
  }

  function parseLocations(locations: WordpressLocation[]) {
    return locations.map(parseLocation)
  }

  function parseLocation(location: WordpressLocation) {
    return {
      ...location,
      categories: getCategories(location),
      position: {
        lat: Number.parseFloat(location.meta['location-lat']),
        lng: Number.parseFloat(location.meta['location-lon']),
      },
    }
  }

  const locations = asyncComputed<WordpressLocation[]>(async () => {
    const { data } = await useWordpressContentData<WordpressLocation[]>('locations', {
      query: {
        per_page: 100,
      },
    })

    return parseLocations(data.value!)
  }, [])

  return { locations, categories }
})
