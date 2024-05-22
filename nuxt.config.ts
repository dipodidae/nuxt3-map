// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@nuxt/ui',
    'nuxt-api-party',
    '@pinia/nuxt',
    '@nuxt/image',
    '@nuxt/eslint',
    '@nuxt/devtools',
  ],

  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
  },

  experimental: {
    payloadExtraction: false,
    renderJsonPayloads: true,
    typedPages: true,
  },

  apiParty: {
    endpoints: {
      wordpressContent: {
        url: 'https://rest.ongehoord.info/wp-json/wp/v2',
      },
    },
  },

  devtools: {
    enabled: true,
  },

  eslint: {
    config: {
      standalone: false,
    },
  },
})
