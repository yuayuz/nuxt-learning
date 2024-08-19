import { useAccountStore } from "~/stores/userAccountStore";

export default defineEventHandler(async (event) => {
  return await readBody(event);
});
