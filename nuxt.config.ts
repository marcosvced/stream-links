// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: 'src/',
  css: [
    'assets/styles/aguia/aguia.min.css',
    'assets/styles/index.css',
  ],
  modules: ['@nuxtjs/supabase'],
  runtimeConfig: {
    public: {
      SUPABASE_URL: process.env.SUPABASE_URL,
      SUPABASE_KEY: process.env.SUPABASE_KEY,
      BASE_URL: process.env.BASE_URL,
    },
  },
})
