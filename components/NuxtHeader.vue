<script setup lang="ts">
function navigate(page: string) {
  return navigateTo({
    path: `${page}`,
  });
}

const theme = useTheme();
const mode = ref("light");
const darkMode = () => {
  localStorage.theme = "tw-dark";

  if (theme.global.current.value.dark) {
    theme.global.name.value = "light";
    document.documentElement.classList.remove("tw-dark");
  } else {
    theme.global.name.value = "dark";
    document.documentElement.classList.add("tw-dark");
  }
  mode.value = theme.global.name.value;
};
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
    <div class="tw-relative tw-flex tw-w-1/3 tw-content-center">
      <v-icon
        :icon="
          mode === 'light' ? 'mdi-weather-night' : 'mdi-white-balance-sunny'
        "
        @click="darkMode()"
        class="tw-absolute tw-left-2/3 tw-right-10"
      ></v-icon>
    </div>
  </div>
</template>

<style scoped></style>
