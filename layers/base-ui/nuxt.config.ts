import { defineNuxtConfig } from 'nuxt/config'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import { BasePreset } from './app/theme/base-preset'

// Aliases like ~ inside a layer config resolve against the consuming
// app, not this layer — layers must use fully resolved paths.
// https://nuxt.com/docs/guide/going-further/layers#relative-paths-and-aliases
const currentDir = dirname(fileURLToPath(import.meta.url))

export default defineNuxtConfig({
  modules: ['@primevue/nuxt-module', '@nuxt/fonts'],
  css: [join(currentDir, 'app/assets/main.css')],
  fonts: {
    families: [
      { name: 'Space Grotesk', provider: 'google', weights: [400, 500, 600, 700] },
      { name: 'IBM Plex Mono', provider: 'google', weights: [400, 500] },
    ],
  },
  primevue: {
    options: {
      ripple: false,
      theme: {
        preset: BasePreset,
        options: {
          prefix: 'p',
          darkModeSelector: 'system',
          cssLayer: {
            name: 'primevue',
            order: 'theme, base, primevue, components, utilities',
          },
        },
      },
    },
  },
})
