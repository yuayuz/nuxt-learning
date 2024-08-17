<script setup lang="ts">
function navigate(page: string) {
  return navigateTo({
    path: `/Item/${page}`,
  });
}
</script>

<template>
  <div
    class="pb-10 pl-8 pr-6 overflow-y-auto tw-fixed tw-top-[4rem] tw-h-full tw-w-[19rem] tw-border tw-pt-7"
  >
    <nav>
      <v-list>
        <div v-for="n in 25" :key="n">
          <v-list-item
            class="tw-text-lg hover:tw-text-sky-400 aria-checked:tw-text-sky-400"
            @click="navigate(n.toString())"
          >
            <template v-slot:title>item {{ n }}</template>
          </v-list-item>
        </div>
      </v-list>
    </nav>
  </div>
</template>

<style scoped></style>
