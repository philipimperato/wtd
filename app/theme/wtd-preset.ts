import { definePreset } from '@primeuix/themes'
import { BasePreset } from '#layers/base-ui/app/theme/base-preset'

/**
 * WtdPreset — the WTD brand on top of the base-ui layer preset.
 * Overrides primary with the seed blue ramp from the design comp
 * (seed: oklch(0.546 0.245 262.9)); everything structural comes
 * from BasePreset.
 */
export const WtdPreset = definePreset(BasePreset, {
  primitive: {
    blue: {
      50: 'oklch(0.971 0.016 262.9)',
      100: 'oklch(0.936 0.034 262.9)',
      200: 'oklch(0.882 0.064 262.9)',
      300: 'oklch(0.812 0.108 262.9)',
      400: 'oklch(0.704 0.176 262.9)',
      500: 'oklch(0.546 0.245 262.9)',
      600: 'oklch(0.488 0.224 262.9)',
      700: 'oklch(0.424 0.190 262.9)',
      800: 'oklch(0.362 0.150 262.9)',
      900: 'oklch(0.302 0.108 262.9)',
      950: 'oklch(0.228 0.070 262.9)',
    },
  },
  semantic: {
    primary: {
      50: '{blue.50}',
      100: '{blue.100}',
      200: '{blue.200}',
      300: '{blue.300}',
      400: '{blue.400}',
      500: '{blue.500}',
      600: '{blue.600}',
      700: '{blue.700}',
      800: '{blue.800}',
      900: '{blue.900}',
      950: '{blue.950}',
    },
  },
})

export default WtdPreset
