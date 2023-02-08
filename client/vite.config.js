// https://vitejs.dev/config/
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// import { fileURLToPath, URL } from "node:url";
// const path = require("path");

export default defineConfig({
  plugins: [vue()],
  build: {
    base: "https://lodestone-app.up.railway.app/",
    outDir: "../server/public",
  },
/*   devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
      },
    },
  }, */
});

/* export default {
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
    root: "src",
    build: {
      outDir: "../server/public",
    },
  },
}); */

/* import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), "");
  return {
    // vite config
    define: {
      __APP_ENV__: env.APP_ENV,
    },
  };
}); */
