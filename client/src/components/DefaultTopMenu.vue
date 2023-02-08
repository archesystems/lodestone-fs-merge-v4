<template>
  <v-menu class="menu-dropdown">
    <template v-slot:activator="{ props }">
      <v-btn class="top-menu-button" v-bind="props">
        <v-icon left>mdi-bell-ring-outline</v-icon>
        <span>Default</span>
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
.top-menu-button {
  font-size: 1.1em;
  font-weight: bold;
}
</style>
