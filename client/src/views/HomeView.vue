<template>
  <v-container class="home">
    <v-card width="360" class="ma-auto">
      <img
        alt="Lodestone Logo"
        class="logo"
        src="../assets/img/android-chrome-192x192.png"
        width="125"
        height="125"
      />
      <div>
        <h1>HomeView</h1>
      </div>
      <p>DrawerLeft State is: {{ menuStore.drawerLeft }}</p>
      <p>Login is: {{ accessStore.login }}</p>
      <button @click="menuStore.toggleDrawerLeft()">Toggle</button>
    </v-card>
  </v-container>
</template>

<script>
import { useMenuStore } from "../stores/MenuStore";
import { useAccessStore } from "../stores/AccessStore";

export default {
  setup() {
    const menuStore = useMenuStore();
    const accessStore = useAccessStore();

    return {
      menuStore,
      accessStore,
    };
  },
};
</script>

<style scoped>
.home {
  margin: 0px;
  padding: 0px;
  background-color: #ffad3b;
}
</style>
