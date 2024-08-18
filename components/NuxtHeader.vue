<script setup lang="ts">
import { useUserStore } from "~/stores/userStore";

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

const useStore = useUserStore();
const user = useStore.getUserID;
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
      <v-btn density="comfortable" variant="text" @click="navigate('/home')"
        >Home
      </v-btn>
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
    <v-menu class="tw-relative tw-left-1/2">
      <template v-slot:activator="{ props }">
        <v-btn
          density="comfortable"
          v-bind="props"
          class="tw-relative tw-rounded-full tw-text-sky-400"
          variant="text"
          >用户
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          @click="
            user === '' ? navigate('/user/register') : navigate('/user/home')
          "
        >
          <template v-slot:title>
            {{ user === "" ? "用户注册" : "用户信息" }}
          </template>
        </v-list-item>
        <v-list-item
          @click="
            user === '' ? navigate('/user/login') : navigate('/user/home')
          "
        >
          <template v-slot:title>
            {{ user === "" ? "用户登陆" : "用户退出" }}
          </template>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<style scoped></style>
