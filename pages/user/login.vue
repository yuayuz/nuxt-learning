<script setup lang="ts">
definePageMeta({
  layout: "account-operation-layout",
});

const userAccountStore = useAccountStore();
const userAccount = userAccountStore.getUserAccount;

const visible = ref(false);

const account = ref({
  id: "",
  password: "",
});

const idRules = function () {
  const message = [];
  if (Number(account.value.id) >= 0) {
    message.push(true);
  } else {
    message.push("请输入数字");
  }
  if (account.value.id.length == 9) {
    message.push(true);
  } else {
    message.push("请输入九位账号");
  }
  return message;
};
const passwordRules = function () {
  const message = [];
  if (account.value.password.length == 9) {
    message.push(true);
  } else {
    message.push("请输入九位密码");
  }
  return message;
};

function navigate(page: string) {
  return navigateTo({
    path: `/${page}`,
  });
}

const userStore = useUserStore();

const login = function () {
  if (
    account.value.id === userAccount.id &&
    account.value.password === userAccount.password
  ) {
    userStore.setUserId(account.value.id);
    navigate("home");
  } else {
    alert("密码错误");
  }
};
</script>

<template>
  <v-form class="tw-space-y-2">
    <p class="tw-text-center tw-text-lg">登陆</p>
    <v-text-field
      variant="outlined"
      density="comfortable"
      v-model="account.id"
      placeholder="请输入账号"
      :rules="idRules()"
    >
      <template v-slot:prepend-inner>
        <v-icon icon="mdi-account-outline"></v-icon>
      </template>
    </v-text-field>
    <v-text-field
      variant="outlined"
      density="comfortable"
      :type="visible ? 'text' : 'password'"
      v-model="account.password"
      :rules="passwordRules()"
      placeholder="请输入密码"
    >
      <template v-slot:prepend-inner>
        <v-icon icon="mdi-lock-outline"></v-icon>
      </template>
      <template v-slot:append-inner>
        <v-icon
          :icon="visible ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
          @click="visible = !visible"
        ></v-icon>
      </template>
    </v-text-field>
    <v-btn location="center" @click="login">登陆</v-btn>
  </v-form>
</template>

<style scoped></style>
