<script setup lang="ts">
definePageMeta({ middleware: 'authenticated' })

const { user, clear } = useUserSession()

async function logout() {
  await clear()
  await navigateTo('/login')
}
</script>

<template>
  <main>
    <h1>Authenticated</h1>
    <pre>{{ user }}</pre>
    <button @click="logout">Log out</button>
  </main>
</template>
