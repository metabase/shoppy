const BASE_URL =
  Cypress.env("BASE_URL") || "https://embedded-analytics-sdk-demo.metabase.com"
const PATHS = ["/admin/products", "/admin/analytics/i5s-lcGYLc1GyFdIy4TxH"]
const VISITS_PER_URL = 10
const TIMEOUT = 60000

describe("Synthetic Monitoring", () => {
  PATHS.forEach((path) => {
    for (let i = 1; i <= VISITS_PER_URL; i++) {
      it(`Visit ${path} - ${i}`, () => {
        cy.visit(`${BASE_URL}${path}`)
        cy.window().then(
          (win) => {
            return new Cypress.Promise((resolve) => {
              win.addEventListener("metabase:timing", resolve, { once: true })
            })
          },
          { timeout: TIMEOUT },
        )
      })
    }
  })
})
