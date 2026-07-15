import { definePreset } from '@primeuix/themes'
import Aura from '@primeuix/themes/aura'

/**
 * WTD preset — tokens extracted from app/theme/wtd.dc.html.
 * All ramps share an OKLCH lightness ladder; neutrals carry the
 * primary hue (262.9) so grays never feel cold against the blue.
 */
export const BasePreset = definePreset(Aura, {
  primitive: {
    // borderRadius ladder is set as raw CSS vars in assets/main.css
    // Primary seed ramp
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
    // Warm accent — loudest call-to-action against the blue
    amber: {
      50: 'oklch(0.977 0.024 90)',
      100: 'oklch(0.951 0.050 88)',
      200: 'oklch(0.918 0.088 85)',
      300: 'oklch(0.878 0.128 82)',
      400: 'oklch(0.828 0.158 78)',
      500: 'oklch(0.775 0.165 72)',
      600: 'oklch(0.688 0.152 66)',
      700: 'oklch(0.578 0.128 60)',
      800: 'oklch(0.478 0.100 58)',
      900: 'oklch(0.402 0.078 56)',
      950: 'oklch(0.298 0.052 54)',
    },
    // Success / positive data
    emerald: {
      50: 'oklch(0.972 0.020 165)',
      100: 'oklch(0.945 0.042 164)',
      200: 'oklch(0.905 0.078 163)',
      300: 'oklch(0.850 0.112 162)',
      400: 'oklch(0.775 0.140 161)',
      500: 'oklch(0.696 0.152 160)',
      600: 'oklch(0.608 0.140 159)',
      700: 'oklch(0.512 0.116 158)',
      800: 'oklch(0.432 0.094 157)',
      900: 'oklch(0.372 0.074 156)',
      950: 'oklch(0.278 0.050 156)',
    },
    // Error / destructive
    red: {
      50: 'oklch(0.971 0.016 20)',
      100: 'oklch(0.936 0.034 22)',
      200: 'oklch(0.885 0.060 24)',
      300: 'oklch(0.812 0.104 25)',
      400: 'oklch(0.712 0.170 26)',
      500: 'oklch(0.586 0.222 27)',
      600: 'oklch(0.522 0.216 28)',
      700: 'oklch(0.452 0.188 28)',
      800: 'oklch(0.388 0.152 28)',
      900: 'oklch(0.334 0.118 27)',
      950: 'oklch(0.252 0.078 26)',
    },
    // Info / passive notifications
    sky: {
      50: 'oklch(0.975 0.014 232)',
      100: 'oklch(0.945 0.030 232)',
      200: 'oklch(0.902 0.056 233)',
      300: 'oklch(0.842 0.090 233)',
      400: 'oklch(0.762 0.122 233)',
      500: 'oklch(0.688 0.140 232)',
      600: 'oklch(0.596 0.146 233)',
      700: 'oklch(0.498 0.130 234)',
      800: 'oklch(0.416 0.104 235)',
      900: 'oklch(0.352 0.078 236)',
      950: 'oklch(0.268 0.052 238)',
    },
    // Neutrals — slate with the primary hue baked in
    slate: {
      50: 'oklch(0.985 0.004 262.9)',
      100: 'oklch(0.967 0.006 262.9)',
      200: 'oklch(0.928 0.009 262.9)',
      300: 'oklch(0.878 0.012 262.9)',
      400: 'oklch(0.712 0.016 262.9)',
      500: 'oklch(0.556 0.018 262.9)',
      600: 'oklch(0.446 0.017 262.9)',
      700: 'oklch(0.372 0.015 262.9)',
      800: 'oklch(0.279 0.013 262.9)',
      900: 'oklch(0.210 0.011 262.9)',
      950: 'oklch(0.145 0.009 262.9)',
    },
  },
  semantic: {
    // Uniform radius: every surface uses the same rung. The rung's
    // *value* lives in assets/main.css (@theme --radius-sm).
    formField: {
      borderRadius: '{border.radius.sm}',
    },
    content: {
      borderRadius: '{border.radius.sm}',
    },
    overlay: {
      popover: {
        borderRadius: '{border.radius.sm}',
      },
      modal: {
        borderRadius: '{border.radius.sm}',
      },
    },
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
    colorScheme: {
      light: {
        surface: {
          0: '#ffffff',
          50: '{slate.50}',
          100: '{slate.100}',
          200: '{slate.200}',
          300: '{slate.300}',
          400: '{slate.400}',
          500: '{slate.500}',
          600: '{slate.600}',
          700: '{slate.700}',
          800: '{slate.800}',
          900: '{slate.900}',
          950: '{slate.950}',
        },
      },
      dark: {
        surface: {
          0: '#ffffff',
          50: '{slate.50}',
          100: '{slate.100}',
          200: '{slate.200}',
          300: '{slate.300}',
          400: '{slate.400}',
          500: '{slate.500}',
          600: '{slate.600}',
          700: '{slate.700}',
          800: '{slate.800}',
          900: '{slate.900}',
          950: '{slate.950}',
        },
      },
    },
  },
  components: {
    // Card doesn't derive from semantic.content — it has its own token.
    card: {
      root: {
        borderRadius: '{border.radius.sm}',
      },
    },
  },
})

export default BasePreset
