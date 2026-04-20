const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '58r4wy',
  allowCypressEnv: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
      specPattern:'cypress/e2e/myTestCases/*.js',
  },
});
