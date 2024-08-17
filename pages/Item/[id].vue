<script setup lang="ts">
const route = useRoute();
</script>

<template>
  <navigation-drawer />
  <div class="tw-h-full tw-pl-[19rem] tw-pt-[4rem]">
    <div class="tw-h-full">
      <p class="tw-text-center">{{ route.params.id }}</p>
    </div>
  </div>
</template>

<style scoped></style>
