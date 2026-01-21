/* eslint-disable */
const { defineConfig } = require("cypress")
const path = require("path")

module.exports = defineConfig({
  e2e: {
    supportFile: false,
    specPattern: path.resolve(
      path.join(__dirname, "../test/synthetic.cy.spec.js"),
    ),
    chromeWebSecurity: false,
  },
})
