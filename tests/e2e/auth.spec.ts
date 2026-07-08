import { test, expect } from '@playwright/test'

test('unauthenticated visit to /authenticated-test redirects to /login', async ({ page }) => {
  await page.goto('/authenticated-test')
  await expect(page).toHaveURL('/login')
  await expect(page.getByRole('link', { name: 'Sign in with Google' })).toBeVisible()
})

test('test login grants access to /authenticated-test', async ({ page }) => {
  await page.goto('/auth/test-login')
  await expect(page).toHaveURL('/authenticated-test')
  await expect(page.getByRole('heading', { name: 'Authenticated' })).toBeVisible()
  await expect(page.locator('pre')).toContainText('test-user@example.com')
})

test('logged-in visit to /login redirects to /authenticated-test', async ({ page }) => {
  await page.goto('/auth/test-login')
  await page.goto('/login')
  await expect(page).toHaveURL('/authenticated-test')
})

test('logout clears the session', async ({ page }) => {
  await page.goto('/auth/test-login')
  // Wait for hydration so the click handler is attached
  await page.waitForLoadState('networkidle')
  await page.getByRole('button', { name: 'Log out' }).click()
  await expect(page).toHaveURL('/login')

  await page.goto('/authenticated-test')
  await expect(page).toHaveURL('/login')
})
