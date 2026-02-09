const BASE_URL = Cypress.env("BASE_URL") || ""
const PATHS = ["/admin/products", "/admin/analytics/i5s-lcGYLc1GyFdIy4TxH"]
const VISITS_PER_URL = 10
const TIMEOUT = 20000

describe("Synthetic Monitoring", () => {
  beforeEach(() => {
    cy.wrap(
      Cypress.automation("remote:debugger:protocol", {
        command: "Network.emulateNetworkConditions",
        params: {
          offline: false,
          latency: 200,
          downloadThroughput: 200 * 1024,
          uploadThroughput: 100 * 1024,
        },
      }),
    )
  })

  afterEach(() => {
    cy.wrap(
      Cypress.automation("remote:debugger:protocol", {
        command: "Network.emulateNetworkConditions",
        params: {
          offline: false,
          latency: 0,
          downloadThroughput: -1,
          uploadThroughput: -1,
        },
      }),
    )
  })

  PATHS.forEach((path) => {
    for (let i = 1; i <= VISITS_PER_URL; i++) {
      it(`Visit ${BASE_URL}${path} - ${i}`, () => {
        cy.visit(`${BASE_URL}${path}`)
        cy.window().then((win) => {
          return cy.wrap(
            new Cypress.Promise((resolve) => {
              win.addEventListener("metabase:timing", resolve, { once: true })
            }),
            { timeout: TIMEOUT },
          )
        })
      })
    }
  })
})
