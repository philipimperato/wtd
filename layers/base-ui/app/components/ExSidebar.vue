<script setup lang="ts">
withDefaults(defineProps<{ as?: string }>(), { as: 'nav' })
</script>

<template>
  <nav class="w-64 shrink-0 border-r border-border bg-surface">
    <div class="sticky top-0 h-dvh overflow-y-auto">
      <slot />
    </div>
  </nav>
</template>
