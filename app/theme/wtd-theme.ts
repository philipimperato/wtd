import { WtdPreset } from './wtd-preset'

export default {
  preset: WtdPreset,
  options: {
    prefix: 'p',
    darkModeSelector: 'system',
    cssLayer: {
      name: 'primevue',
      order: 'theme, base, primevue, components, utilities',
    },
  },
}
