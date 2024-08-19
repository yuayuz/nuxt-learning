<script setup lang="ts">
definePageMeta({
  layout: "account-operation-layout",
});

const visible = ref(false);

const userAccount = ref({
  id: "",
  password: "",
});
const id = ref("");
const firstPassword = ref("");
const secondPassword = ref("");
const idRules = function () {
  const message = [];
  if (Number(id.value) >= 0) {
    message.push(true);
  } else {
    message.push("请输入数字");
  }
  if (id.value.length == 9) {
    userAccount.value.id = id.value;
    message.push(true);
  } else {
    message.push("请输入九位账号");
  }
  return message;
};
const firstPasswordRules = function () {
  const message = [];
  if (firstPassword.value.length == 9) {
    message.push(true);
  } else {
    message.push("请输入九位密码");
  }
  return message;
};
const secondPasswordRules = function () {
  const message = [];
  if (firstPassword.value === secondPassword.value) {
    message.push(true);
  } else {
    message.push("两次密码不一致");
  }
  if (firstPassword.value.length == 9) {
    userAccount.value.password = secondPassword.value;
    message.push(true);
  } else {
    message.push("请输入九位密码");
  }

  return message;
};
const userAccountStore = useAccountStore();

let registerData = ref({
  id: "",
  password: "",
});
const register = async function () {
  registerData.value = await $fetch("/api/userRegister", {
    method: "post",
    body: { id: userAccount.value.id, password: userAccount.value.password },
  });
  userAccountStore.setUser(registerData.value.id, registerData.value.password);
};
</script>

<template>
  <v-form class="tw-space-y-2">
    <p class="tw-text-center tw-text-lg">注册</p>
    <v-text-field
      variant="outlined"
      density="comfortable"
      v-model="id"
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
      v-model="firstPassword"
      :rules="firstPasswordRules()"
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
    <v-text-field
      variant="outlined"
      density="comfortable"
      :type="visible ? 'text' : 'password'"
      v-model="secondPassword"
      placeholder="请再次输入密码"
      :rules="secondPasswordRules()"
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
    <v-btn location="center" @click="register()">注册</v-btn>
  </v-form>
</template>

<style scoped></style>
