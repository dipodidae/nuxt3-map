export const useCategoryStore = defineStore('categories', () => {
  const categories = ref<AnimalCategory[]>([])

  async function fetch() {
    const { body } = await queryContent('categories').findOne()

    categories.value = body
  }

  return { categories, fetch }
})
