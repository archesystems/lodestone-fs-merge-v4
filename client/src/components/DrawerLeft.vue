<template>
  <v-navigation-drawer
    v-model="menuStore.drawerLeft"
    left
    permanent
    width="254"
    color="grey-lighten-1"
  >
    <!-- Drawer content -->
    <v-container class="pa-0 ma-0">
      <v-list bg-color class="drawer-left-head">
        <v-row no-gutters align="center">
          <v-avatar rounded="0">
            <img
              src="../assets/img/lodestone-logo-64x64.png"
              alt="Lodestone"
              width="36"
            />
          </v-avatar>
          <v-list-item>
            <v-list-item-title class="drawer-left-title"
              >Main Menu</v-list-item-title
            >
          </v-list-item>
        </v-row>
      </v-list>
      <v-divider></v-divider>
      <v-list density="comfortable" class="pa-0 ma-0">
        <v-list-item
          class="drawer-left-item"
          v-for="item in items"
          :key="item.title"
          link
          :to="item.link"
        >
          <v-list-item-action @click="menuStore.drawerLeft = false">
            <v-icon class="mr-3" size="large">{{ item.icon }}</v-icon>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-action>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list class="drawer-left-tail" bg-color>
        <v-list-item>
          <p>DrawerLeft State is: {{ menuStore.drawerLeft }}</p>
        </v-list-item>
      </v-list>
    </v-container>
  </v-navigation-drawer>
</template>

<script>
import { useMenuStore } from "../stores/MenuStore";

export default {
  setup() {
    const menuStore = useMenuStore();
    return { menuStore };
  },
  data: () => ({
    drawer: false,
    items: [
      { title: "Dashboard", icon: "mdi-view-dashboard", link: "/dashboard" },
      { title: "Profile", icon: "mdi-account-details", link: "/profile" },
      { title: "People", icon: "mdi-account-multiple", link: "/people" },
      { title: "Places", icon: "mdi-map-marker", link: "/places" },
      { title: "Cloud", icon: "mdi-cloud-outline", link: "/cloud" },
      { title: "Update", icon: "mdi-update", link: "/cloud" },
      { title: "Connect", icon: "mdi-cellphone", link: "/dbregister" },
      { title: "Icons", icon: "mdi-office-building", link: "/icons" },
      { title: "About", icon: "mdi-information-outline", link: "/about" },
      { title: "Settings", icon: "mdi-cog-outline", link: "/settings" },
    ],
  }),
};
</script>

<style scoped lang="scss">
@import "../assets/scss/_variables.scss";
@import "../assets/css/variables.css";

.drawer-left-head {
  margin: 0px;
  padding: 3px 0px 0px 12px;
  height: 53px;
  background-color: $ls_blu_drker;
}

.drawer-left-title {
  margin: 0px;
  padding: 0px;
  font-size: 1.2rem;
  font-weight: 400;
  color: $ls_wht;
}

.drawer-left-item {
  margin: 0px;
  padding: 0px;
  height: 51px;
  background-color: lightblue;
  border: 5px;
}

.drawer-left-tail {
  margin: 0px;
  padding: 0px;
  height: 48px;
  background-color: $ls_vio_lt;
}
</style>
