import { defineStore } from "pinia";

export const useUserStore = defineStore("userStore", {
  state: () => ({
    id: "",
  }),
  getters: {
    getUserID: (state) => state.id,
  },
  actions: {
    setUserId(id: string, password: string) {
      this.id = id;
    },
    deleteUser() {
      this.id = "";
    },
  },
});
