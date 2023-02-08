const { defineConfig } = require("@vue/cli-service");
const path = require("path");

module.exports = defineConfig({
  outputDir: path.resolve(__dirname, "../server/public"),
/*   devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
      },
    },
  }, */
  transpileDependencies: true,
  css: {
    sass: {
      loaderOptions: {
        sass: {
          additionalData: `@import "@/assets/scss/_variables.scss";`,
        },
      },
    },
  },
});
