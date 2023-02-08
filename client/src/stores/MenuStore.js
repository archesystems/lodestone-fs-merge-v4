import { defineStore } from "pinia";

export const useMenuStore = defineStore("menuStore", {
  state: () => ({
    drawerLeft: false,
  }),
  //getters: {
  //  favs() {
  //     return this.tasks.filter((t) => t.isFav);
  //   },
  //  },
  actions: {
    toggleDrawerLeft() {
      this.drawerLeft = !this.drawerLeft;
      //drawerLeft = true;
      console.log(this.drawerLeft);
    },
  },
});
