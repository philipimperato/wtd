// Dev-only login bypass for e2e tests. Never available in production builds.
export default defineEventHandler(async (event) => {
  if (!import.meta.dev) {
    throw createError({ statusCode: 404 })
  }

  const dbUser = await upsertGoogleUser({
    sub: 'test-sub-000',
    email: 'test-user@example.com',
    name: 'Test User',
  })

  await setUserSession(event, {
    user: {
      id: Number(dbUser.id),
      email: dbUser.email,
      name: dbUser.name,
      avatar: dbUser.avatar_url ?? '',
    },
  })
  return sendRedirect(event, '/authenticated-test')
})
