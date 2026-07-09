import { db } from '~~/db'

export interface GoogleProfile {
  sub: string
  email: string
  name: string
  picture?: string
}

export async function upsertGoogleUser(profile: GoogleProfile) {
  return await db
    .insertInto('users')
    .values({
      google_sub: profile.sub,
      email: profile.email,
      name: profile.name,
      avatar_url: profile.picture ?? null,
    })
    .onConflict((oc) => oc.column('google_sub').doUpdateSet({
      email: profile.email,
      name: profile.name,
      avatar_url: profile.picture ?? null,
      updated_at: new Date(),
    }))
    .returning(['id', 'email', 'name', 'avatar_url'])
    .executeTakeFirstOrThrow()
}
