const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '58r4wy',
  "reporter": "mochawesome",
    "reporterOptions": {
      "reportDir": "cypress/reports",
      "overwrite": false,
      "html": true,
      "json": true,
      "charts": true
    },
  allowCypressEnv: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // baseUrl:'',
      specPattern:'cypress/e2e/myTestCases/**/*.js',
  },
});
