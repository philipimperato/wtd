import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/a11y',
    '@nuxt/eslint',
    '@nuxt/scripts',
    'nuxt-auth-utils'
  ],
  eslint: {
    config: {
      stylistic: true,
    },
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  primevue: {
    importTheme: { from: '~/theme/wtd-theme.ts' },
  },
  routeRules: {
    '/': { redirect: '/login' },
  }
})
