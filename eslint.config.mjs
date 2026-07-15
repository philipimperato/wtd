// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  {
    rules: {
      '@stylistic/max-len': ['warn', { code: 75, tabWidth: 2 }],
    },
  },
)
