/* eslint-disable */
const { defineConfig } = require("cypress")
const path = require("path")

module.exports = defineConfig({
  e2e: {
    baseUrl: `http://localhost:${process.env.CLIENT_PORT}`,
    supportFile: path.resolve(path.join(__dirname, "./cypress.js")),
    specPattern: path.resolve(path.join(__dirname, "../test/**/*.cy.spec.js")),
    ...(!process.env.INCLUDE_SYNTHETIC_MONITORING_TESTS && {
      excludeSpecPattern: ["**/synthetic.cy.spec.js"],
    }),
    env: { PR_NUMBER: process.env.PR_NUMBER },
    defaultBrowser: process.env.CYPRESS_BROWSER ?? "chrome",
    userAgent: "metabase-bot/1.0",
  },
})
