<script setup lang="ts">
function navigate(page: string) {
  return navigateTo({
    path: `${page}`,
  });
}
</script>

<template>
  <div
    class="header tw-bg-pink/95 tw-fixed tw-left-0 tw-right-0 tw-top-0 tw-flex tw-h-16 tw-border tw-px-8 tw-py-4 tw-shadow"
  >
    <div
      class="tw-w-1/3 tw-cursor-pointer tw-text-pink-400"
      @click="navigate('/')"
    >
      Nuxt-learning
    </div>
    <div class="tw-flex tw-w-1/3 tw-content-center">
      <v-btn variant="text" @click="navigate('/home')">Home</v-btn>
    </div>
  </div>
</template>

<style scoped></style>
