import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";

// Importing the global css file
import "./assets/css/main.css";

loadFonts();

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(vuetify);

// Global variable
app.config.globalProperties.$username = "default";

app.mount("#app");
