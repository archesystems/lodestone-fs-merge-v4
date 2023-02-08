import { defineStore } from "pinia";

export const useAccessStore = defineStore("accessStore", {
  state: () => ({
    login: false,
  }),
});
