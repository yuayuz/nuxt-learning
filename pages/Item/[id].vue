<script setup lang="ts">
definePageMeta({
  layout: "header-drawer-layout",
});
const route = useRoute();
</script>

<template>
  <p class="tw-text-center">{{ route.params.id }}</p>
</template>

<style scoped></style>
