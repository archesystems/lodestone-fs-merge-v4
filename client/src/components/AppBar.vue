<template>
  <v-app-bar app clipped-left class="app-bar" density="comfortable">
    <v-app-bar-nav-icon left @click="menuStore.toggleDrawerLeft()" />
    <img
      class="lodestone-icon"
      src="../assets/img/lodestone-logo-64x64.png"
      alt="Lodestone"
    />
    <img
      class="lodestone-text"
      src="../assets/img/lodestone-text-16px.png"
      alt="Lodestone"
    />
    <v-spacer></v-spacer>
    <NavIcons />
    <NavText />
  </v-app-bar>
</template>

<script>
import { useMenuStore } from "../stores/MenuStore";
import NavIcons from "./NavIcons.vue";
import NavText from "./NavText.vue";

export default {
  name: "AppBar",
  components: {
    NavIcons,
    NavText,
  },
  setup() {
    const menuStore = useMenuStore();

    return { menuStore };
  },
};
</script>

<style scoped>
.lodestone-icon {
  display: none;
}
@media (max-width: 409px) and (min-width: 359px) {
  .lodestone-icon {
    padding-top: 2px;
    margin-left: 5px;
    width: 38px;
    display: block;
  }
}

.lodestone-text {
  display: none;
}
@media (min-width: 410px) {
  .lodestone-text {
    margin-left: 6px;
    display: block;
  }
}
</style>
