// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ['@vueuse/nuxt', '@nuxt/ui', 'nuxt-api-party', '@pinia/nuxt', "@nuxt/image"],

  apiParty: {
    endpoints: {
      wordpressContent: {
        url: 'https://rest.ongehoord.info/wp-json/wp/v2',
      },
    },
  },

  build: {
    transpile: ['@fawmi/vue-google-maps'],
  },
})