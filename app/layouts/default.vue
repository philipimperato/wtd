<template>
  <ExLayout>
    <template #sidebar>
      <ExSidebar>
        <AppNav />
      </ExSidebar>
    </template>

    <ExContainer as="main">
      <slot />
    </ExContainer>
  </ExLayout>
</template>
