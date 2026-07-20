<script setup lang="ts">
/* Nav model for PrimeVue Menu; `route` is picked up by the custom
   item template below so links go through NuxtLink. Icons are inline
   SVGs (heroicons outline) — no icon font. */
const items = ref([
  {
    label: 'Plans',
    route: '/plans',
    icon: 'M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z',
  },
])

/* Strip Menu's panel chrome so it sits flat on the sidebar surface;
   colors come from the item template. */
const menuPt = {
  root: { class: '!bg-transparent !border-0 !p-0 w-full' },
  list: { class: '!p-0 flex flex-col gap-y-1' },
}
</script>

<template>
  <div class="flex grow flex-col gap-y-5 overflow-y-auto border-r border-surface-200 bg-surface-0 px-6 dark:border-surface-800 dark:bg-surface-900">
    <!-- Logo placement -->
    <div class="flex h-16 shrink-0 items-center">
      <NuxtLink
        to="/plans"
        class="font-mono text-sm font-medium tracking-[0.22em] uppercase text-surface-900 dark:text-surface-0"
      >
        WTD
      </NuxtLink>
    </div>

    <nav class="-mx-2 flex flex-1 flex-col">
      <Menu
        :model="items"
        :pt="menuPt"
      >
        <template #item="{ item, props }">
          <NuxtLink
            v-slot="{ href, navigate, isActive }"
            :to="item.route"
            custom
          >
            <a
              :href="href"
              v-bind="props.action"
              class="group flex gap-x-3 !rounded-md !p-2 text-sm/6 font-semibold"
              :class="isActive
                ? '!bg-surface-50 !text-primary-600 dark:!bg-surface-800 dark:!text-primary-400'
                : '!text-surface-700 hover:!bg-surface-50 hover:!text-primary-600 dark:!text-surface-300 dark:hover:!bg-surface-800 dark:hover:!text-primary-400'"
              @click="navigate"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                aria-hidden="true"
                class="size-6 shrink-0"
                :class="isActive
                  ? 'text-primary-600 dark:text-primary-400'
                  : 'text-surface-400 group-hover:text-primary-600 dark:text-surface-500 dark:group-hover:text-primary-400'"
              >
                <path
                  :d="item.icon"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              {{ item.label }}
            </a>
          </NuxtLink>
        </template>
      </Menu>
    </nav>
  </div>
</template>
