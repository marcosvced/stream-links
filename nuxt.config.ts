// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: 'src/',
  css: [
    'assets/styles/aguia/aguia.min.css',
    'assets/styles/index.css',
  ],
  supabase: {
    cookieOptions: {
      maxAge: 360000,
      sameSite: 'lax',
      secure: true,
    },
  },
  // runtimeConfig: {
  //   public: {
  //     SUPABASE_URL: process.env.SUPABASE_URL,
  //     SUPABASE_KEY: process.env.SUPABASE_KEY,
  //     BASE_URL: process.env.BASE_URL,
  //   },
  // },
})
