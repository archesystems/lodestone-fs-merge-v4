<template>
  <v-container class="cloud">
    <v-card width="360" class="ma-auto">
      <img
        alt="Lodestone Logo"
        class="logo"
        src="../assets/img/android-chrome-192x192.png"
        width="125"
        height="125"
      />
      <div>
        <h1>CloudView</h1>
      </div>
      <p>DrawerLeft State is: {{ menuStore.drawerLeft }}</p>
      <button @click="menuStore.toggleDrawerLeft()">Toggle</button>
    </v-card>
  </v-container>
</template>

<script>
import { useMenuStore } from "../stores/MenuStore";

export default {
  setup() {
    const menuStore = useMenuStore();

    return {
      menuStore,
    };
  },
};
</script>

<style scoped>
.cloud {
  margin: 0px;
  padding: 0px;
  background-color: #ffad3b;
}
</style>
