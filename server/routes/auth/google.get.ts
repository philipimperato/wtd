export default defineOAuthGoogleEventHandler({
  async onSuccess(event, { user }) {
    const dbUser = await upsertGoogleUser(user)

    await setUserSession(event, {
      user: {
        id: Number(dbUser.id),
        email: dbUser.email,
        name: dbUser.name,
        avatar: dbUser.avatar_url ?? '',
      },
    })
    return sendRedirect(event, '/authenticated-test')
  },
  onError(event, error) {
    console.error('Google OAuth error:', error)
    return sendRedirect(event, '/login')
  },
})
