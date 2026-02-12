import { aggregateTimings } from "../support/helpers/synthetic-monitoring"

const BASE_URL = Cypress.env("BASE_URL") || ""
const PR_NUMBER = Cypress.env("PR_NUMBER") || ""
const PATHS = ["/admin/products", "/admin/analytics/i5s-lcGYLc1GyFdIy4TxH"]
const VISITS_PER_URL = 10
const TIMEOUT = 20000

const timings = {}

const waitForTiming = (path) => {
  const visitStart = performance.now()

  cy.window().then((win) => {
    return cy.wrap(
      new Cypress.Promise((resolve) => {
        win.addEventListener(
          "metabase:timing",
          (event) => {
            const timing = event.detail.timing ?? performance.now() - visitStart

            if (!timings[path]) {
              timings[path] = []
            }

            timings[path].push(timing)

            resolve(event)
          },
          { once: true },
        )
      }),
      { timeout: TIMEOUT },
    )
  })
}

const sendAggregatedTiming = (path) => {
  cy.then(() => {
    const { median, sample_count } = aggregateTimings(timings[path])

    cy.log(
      `Aggregated timing for ${path}: median=${median}ms (${sample_count} samples after IQR filter)`,
    )

    cy.window().then((win) => {
      if (win.DD_RUM) {
        win.DD_RUM.setViewContextProperty("path", path)
        win.DD_RUM.setViewContextProperty("sample_count", sample_count)

        if (PR_NUMBER) {
          win.DD_RUM.setViewContextProperty("pr_number", PR_NUMBER)
        }

        win.DD_RUM.addTiming("aggregated_timing", median)
        cy.log(`Sent aggregated_timing to Datadog: ${median}ms for ${path}`)
      }
    })
  })
}

describe("Synthetic Monitoring", () => {
  beforeEach(() => {
    cy.wrap(
      Cypress.automation("remote:debugger:protocol", {
        command: "Network.emulateNetworkConditions",
        params: {
          offline: false,
          latency: 200,
          downloadThroughput: 400 * 1024,
          uploadThroughput: 200 * 1024,
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
        cy.visit(`${BASE_URL}${path}`, {
          onBeforeLoad(win) {
            win.__SYNTHETIC_MONITORING__ = true
          },
        })

        waitForTiming(path)

        if (i === VISITS_PER_URL) {
          sendAggregatedTiming(path)
        }
      })
    }
  })
})
