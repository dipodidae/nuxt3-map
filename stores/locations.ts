export const useLocationsStore = defineStore('locations', () => {
  const locations = ref<WordpressLocation[]>([])

  function getLocations(): Promise<WordpressLocation[]> {
    return $fetch<WordpressLocation[]>('https://rest.ongehoord.info/wp-json/wp/v2/locations', {
      method: 'GET',
      params: {
        per_page: 100,
      },
      parseResponse: JSON.parse,
    })
  }

  async function fetch() {
    const { data } = await useAsyncData('item', getLocations)

    locations.value = data.value
  }

  return { locations, fetch }
})
