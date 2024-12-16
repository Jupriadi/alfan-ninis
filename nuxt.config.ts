// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  plugins: [
    '~/plugins/firebase.js'
  ],
  modules: ['@nuxtjs/tailwindcss', 'nuxt-aos'],
  css: ["~/assets/main.css"]
})