// Dev-only login bypass for e2e tests. Never available in production builds.
export default defineEventHandler(async (event) => {
  if (!import.meta.dev) {
    throw createError({ statusCode: 404 })
  }

  await setUserSession(event, {
    user: {
      email: 'test-user@example.com',
      name: 'Test User',
      avatar: '',
    },
  })
  return sendRedirect(event, '/authenticated-test')
})
