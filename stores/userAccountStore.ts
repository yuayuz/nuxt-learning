export const useAccountStore = defineStore("accountStore", {
  state: () => ({
    id: "",
    password: "",
  }),
  getters: {
    getUserAccount(state) {
      return {
        id: state.id,
        password: state.password,
      };
    },
  },
  actions: {
    setUser(id: string, password: string) {
      this.id = id;
      this.password = password;
    },
  },
});
