<template>
  <v-menu class="top-menu">
    <template v-slot:activator="{ props }">
      <v-btn class="menu-dropdown" v-bind="props">
        <v-icon left>mdi-home</v-icon>
        <span>Home</span>
      </v-btn>
    </template>
    <v-list>
      <v-list-item
        class="top-menu-item"
        v-for="item in items"
        :key="item.title"
        link
        :to="item.link"
      >
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    items: [
      { title: "Home", icon: "mdi-view-dashboard", link: "/" },
      { title: "Help", icon: "mdi-account", link: "/help" },
      { title: "Cloud", icon: "mdi-cog", link: "/cloud" },
      { title: "Locator", icon: "mdi-map-marker", link: "/locator" },
      { title: "Alerts", icon: "mdi-bell-ring-outline", link: "/alerts" },
    ],
  }),
};
</script>

<style scoped>
.menu-dropdown {
  font-size: 1.1em;
  font-weight: bold;
}
</style>
