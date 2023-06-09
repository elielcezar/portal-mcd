const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
        sass: {
            additionalData:  `
              @import "@/scss/variables.scss";
              @import "@/scss/global.scss";
            `
        }
    }
  }
})
