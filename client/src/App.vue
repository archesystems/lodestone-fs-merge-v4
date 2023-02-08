<template>
  <v-app id="lodestone">
    <AppBar />
    <DrawerLeft />
    <v-container fluid class="main-container">
      <v-row class="main-row">
        <v-col class="left-padding">
          <!-- Column content here 
                      <p>DrawerLeft State is: {{ menuStore.drawerLeft }}</p>
                      <p>isOpen is: {{ isOpen }}</p> -->
          <v-container
            fluid
            fill-height
            class="content-container d-flex justify-center"
          >
            <RouterView />
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import { RouterView } from "vue-router";
import AppBar from "./components/AppBar.vue";
import DrawerLeft from "./components/DrawerLeft.vue";
import { useMenuStore } from "./stores/MenuStore";

export default {
  name: "App",
  components: { AppBar, DrawerLeft, RouterView },
  setup() {
    const menuStore = useMenuStore();

    return {
      menuStore,
    };
  },
  computed: {
    isOpen() {
      return this.menuStore.drawerLeft ? 1 : 0;
    },
  },
};
</script>

<style scoped lang="scss">
@use "./assets/scss/settings.scss";

* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  --padding-min: 0px;
  --padding-max: 254px;
  --isOpen: v-bind(isOpen);
  --isClosed: calc(1 - var(--isOpen));
}

.main-container {
  height: 100%;
  margin: 56px 0px 0px 0px;
  padding: 0px;
  background-color: #eeeeee;
}

.main-row {
  margin: 0px;
  padding: 0px;
  max-width: 100%;
  background-color: #ff0000;
}

.left-padding {
  margin: 0px;
  padding: 0px;
  background-color: #a89eff;
}

@media (min-width: 632px) {
  .left-padding {
    margin: 0px;
    padding-left: calc(
      var(--isClosed) * var(--padding-min) + var(--isOpen) * var(--padding-max)
    ) !important;
  }

  .content-container {
    background-color: #94e3d2 !important;
  }
}

.content-container {
  margin: 0px;
  padding: 0px;
  min-height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: #f0f0cc;
}

html {
  overflow-y: hidden;
}

.scrollable {
  overflow-y: scroll;
}

body {
  height: 100%;
}
</style>
