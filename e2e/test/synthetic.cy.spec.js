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
        win.DD_RUM.addAction("aggregated_timing", {
          path,
          median,
          pr_number: PR_NUMBER || undefined,
          sample_count,
        })
      }
    })
  })
}

const writeTimingsReport = () => {
  const paths = {}

  Object.entries(timings).forEach(([path, values]) => {
    const { median, sample_count } = aggregateTimings(values)

    paths[path] = { median, sample_count, raw_values: values }
  })

  cy.writeFile("cypress/results/timings.json", {
    pr_number: PR_NUMBER || undefined,
    timestamp: new Date().toISOString(),
    paths,
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
        cy.visit(`${BASE_URL}${path}`)
        waitForTiming(path)

        if (i === VISITS_PER_URL) {
          sendAggregatedTiming(path)
        }
      })
    }
  })

  // eslint-disable-next-line no-undef
  after(() => {
    writeTimingsReport()
  })
})
