import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  testDir: './tests/e2e',
  outputDir: './tests/e2e/test-results',
  reporter: [['html', { outputFolder: './tests/e2e/playwright-report', open: 'never' }]],
  use: {
    baseURL: 'http://127.0.0.1:3000',
    trace: 'on-first-retry',
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
  ],
  webServer: {
    // Pin to IPv4: Nuxt otherwise binds [::1] while the probe resolves localhost to 127.0.0.1
    command: 'pnpm dev --host 127.0.0.1',
    // Probe /login: the app has no index page yet and 404 reads as "not ready"
    url: 'http://127.0.0.1:3000/login',
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
})
