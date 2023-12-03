export default defineNuxtPlugin(() => {
  const { fetch: fetchLocations } = useLocationsStore()
  const { fetch: fetchCategories } = useCategoryStore()

  fetchLocations()
  fetchCategories()
})
