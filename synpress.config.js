const { defineConfig } = require("cypress");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");
const synpressPlugins = require("@synthetixio/synpress/plugins");

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/ScenarionTests.cy.js",
    supportFile: "cypress/support/index.js",
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      synpressPlugins(on, config);
      return config;
    },
    baseUrl: "https://zero.loans/",
    includeShadowDom: true,
    defaultCommandTimeout: 7000,
    numTestsKeptInMemory: 0
  }
});
