<script setup lang="ts">
const { loggedIn } = useUserSession()

if (loggedIn.value) {
  await navigateTo('/authenticated-test')
}
</script>

<template>
  <main>
    <h1>Login</h1>
    <a href="/auth/google">Sign in with Google</a>
  </main>
</template>
