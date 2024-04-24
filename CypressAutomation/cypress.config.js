const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "5axozg",
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    specPattern: 'cypress/integration/examples/*.js',
    screenshotsFolder: 'cypress/screenshots',
    defaultCommandTimeout: 6000,
    video: false,
    env: {
      url: 'https://rahulshettyacademy.com'
    }
  },
});
