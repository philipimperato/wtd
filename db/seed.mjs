import pg from 'pg'

const users = [
  {
    google_sub: '100000000000000000001',
    email: 'alice@example.com',
    name: 'Alice Example',
    avatar_url: 'https://lh3.googleusercontent.com/a/seed-alice',
  },
  {
    google_sub: '100000000000000000002',
    email: 'bob@example.com',
    name: 'Bob Example',
    avatar_url: null,
  },
  {
    // Recycled email: same address as Alice under a different Google
    // sub. Must create a distinct user — email is not unique.
    google_sub: '100000000000000000003',
    email: 'alice@example.com',
    name: 'Alice Recycled',
    avatar_url: null,
  },
]

const client = new pg.Client({ connectionString: process.env.DATABASE_URL })
await client.connect()

for (const u of users) {
  await client.query(
    `insert into users (google_sub, email, name, avatar_url)
     values ($1, $2, $3, $4)
     on conflict (google_sub) do update set
       email = excluded.email,
       name = excluded.name,
       avatar_url = excluded.avatar_url,
       updated_at = now()`,
    [u.google_sub, u.email, u.name, u.avatar_url],
  )
}

const { rows } = await client.query('select id, email, name from users order by id')
console.table(rows)
await client.end()
