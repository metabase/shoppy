import { aggregateTimings } from "../support/helpers/synthetic-monitoring"

const BASE_URL = Cypress.env("BASE_URL") || ""
const PR_NUMBER = Cypress.env("PR_NUMBER") || ""
const PATHS = ["/admin/products", "/admin/analytics/i5s-lcGYLc1GyFdIy4TxH"]
const VISITS_PER_URL = 10
const TIMEOUT = 30000

const DEBOUNCE_MS = 2000
const timings = {}

const waitForCards = (path) => {
  cy.get("[data-card-key]", { timeout: TIMEOUT })

  const waitUntilStable = (prevCount) => {
    cy.wait(DEBOUNCE_MS)
    cy.get("[data-card-key]").then(($cards) => {
      if ($cards.length !== prevCount) {
        waitUntilStable($cards.length)
      } else {
        cy.window().then((win) => {
          win.__CARD_OBSERVER__?.disconnect()

          if (!timings[path]) {
            timings[path] = []
          }

          timings[path].push(win.__CARD_LOAD_TIME__)
        })
      }
    })
  }

  cy.get("[data-card-key]").then(($cards) => {
    waitUntilStable($cards.length)
  })
}

const sendAggregatedTiming = (path) => {
  cy.then(() => {
    const { median, sample_count } = aggregateTimings(timings[path])

    cy.log(
      `Aggregated timing for ${path}: median=${median}ms (${sample_count} samples)`,
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
          latency: -1,
          downloadThroughput: -1,
          uploadThroughput: -1,
        },
      }),
    )
  })

  PATHS.forEach((path) => {
    for (let i = 1; i <= VISITS_PER_URL; i++) {
      it(
        `Visit ${BASE_URL}${path} - ${i}`,
        { defaultCommandTimeout: TIMEOUT },
        () => {
          cy.visit(`${BASE_URL}${path}`, {
            onBeforeLoad(win) {
              win.__SYNTHETIC_MONITORING__ = true
              win.__CARD_LOAD_TIME__ = null

              const observer = new MutationObserver(() => {
                if (win.document.querySelector("[data-card-key]")) {
                  win.__CARD_LOAD_TIME__ = win.performance.now()
                }
              })

              observer.observe(win.document, {
                childList: true,
                subtree: true,
              })

              win.__CARD_OBSERVER__ = observer
            },
          })

          waitForCards(path)

          if (i === VISITS_PER_URL) {
            sendAggregatedTiming(path)
          }
        },
      )
    }
  })
})
