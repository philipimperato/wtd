<script setup lang="ts">
definePageMeta({ layout: false })

const { loggedIn } = useUserSession()

if (loggedIn.value) {
  await navigateTo('/plans')
}
</script>

<template>
  <main class="min-h-screen flex items-center justify-center bg-surface-50 dark:bg-surface-950 px-4">
    <Card class="w-full max-w-sm">
      <template #header>
        <div class="flex flex-col gap-2 text-center pt-8 px-8">
          <span class="font-mono text-xs font-medium tracking-[0.22em] uppercase text-surface-500">WTD</span>
        </div>
      </template>
      <template #title>
        <div class="text-center">
          Welcome back
        </div>
      </template>
      <template #subtitle>
        <div class="text-center">
          Sign in to continue
        </div>
      </template>
      <template #content>
        <Button
          as="a"
          href="/auth/google"
          severity="secondary"
          outlined
          class="w-full !justify-center gap-3 mt-4"
        >
          <svg
            class="w-5 h-5 shrink-0"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fill="#4285F4"
              d="M23.52 12.27c0-.85-.08-1.66-.22-2.45H12v4.64h6.46a5.52 5.52 0 0 1-2.4 3.62v3h3.88c2.27-2.09 3.58-5.17 3.58-8.81z"
            />
            <path
              fill="#34A853"
              d="M12 24c3.24 0 5.96-1.07 7.94-2.91l-3.88-3.01c-1.07.72-2.45 1.15-4.06 1.15-3.13 0-5.78-2.11-6.72-4.95H1.27v3.11A12 12 0 0 0 12 24z"
            />
            <path
              fill="#FBBC05"
              d="M5.28 14.28a7.2 7.2 0 0 1 0-4.56V6.61H1.27a12 12 0 0 0 0 10.78l4.01-3.11z"
            />
            <path
              fill="#EA4335"
              d="M12 4.77c1.76 0 3.35.61 4.6 1.8l3.44-3.44A11.97 11.97 0 0 0 12 0 12 12 0 0 0 1.27 6.61l4.01 3.11C6.22 6.88 8.87 4.77 12 4.77z"
            />
          </svg>
          <span class="font-medium">Login with Google</span>
        </Button>
      </template>
    </Card>
  </main>
</template>
