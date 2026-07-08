import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
  test: {
    include: ['tests/unit/**/*.{test,spec}.ts'],
    environment: 'happy-dom',
  },
})
