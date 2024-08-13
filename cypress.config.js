const { defineConfig } = require("cypress");
const { GenerateCtrfReport } = require('cypress-ctrf-json-reporter')


module.exports = defineConfig({
  e2e: {
    experimentalStudio:true,
    testIsolation: false,
    setupNodeEvents(on, config) {
      new GenerateCtrfReport({
        on,
      })
      // implement node event listeners here
    },
  },
});
