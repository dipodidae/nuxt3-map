export default defineNuxtConfig({
  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      keyGoogleMaps: '',
    },
  },

  modules: ['@pinia/nuxt', '@vueuse/nuxt', "@nuxt/content"],
})