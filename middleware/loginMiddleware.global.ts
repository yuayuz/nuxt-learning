export default defineNuxtRouteMiddleware((to, from) => {
  const userStore = useUserStore();
  if (
    to.path !== "/" &&
    to.path !== "/user/login" &&
    to.path !== "/user/register" &&
    userStore.getUserID === ""
  ) {
    return navigateTo("/user/login");
  }
});
