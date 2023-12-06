const { defineConfig } = require("cypress");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
    baseUrl: "https://zero.loans/",
    includeShadowDom: true,
    defaultCommandTimeout: 7000,
    numTestsKeptInMemory: 0,
    chromeWebSecurity: false
  }
});
