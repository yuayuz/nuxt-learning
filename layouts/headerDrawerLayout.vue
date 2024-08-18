<script setup lang="ts"></script>

<template>
  <v-app>
    <nuxt-header />
    <navigation-drawer />
    <div class="tw-h-full tw-pl-[19rem] tw-pt-[4rem]">
      <div class="tw-h-full">
        <slot />
      </div>
    </div>
  </v-app>
</template>

<style scoped></style>
