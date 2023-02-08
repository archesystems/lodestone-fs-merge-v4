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
      <section aria-labelledby="result">
        <h3 id="result"><a href="#result">Result</a></h3>
        <div class="section-content">
          <iframe
            class="sample-code-frame"
            title="Reading a file sample"
            id="frame_reading_a_file"
            src="https://yari-demos.prod.mdn.mozit.cloud/en-US/docs/Web/API/File_API/_sample_.reading_a_file.html"
            loading="lazy"
            height="300"
          ></iframe>
        </div>
      </section>
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
.output {
  overflow: scroll;
  margin: 1rem 0;
  height: 200px;
}
</style>
