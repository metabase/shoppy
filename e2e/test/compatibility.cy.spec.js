import { METABASE_URL, signInAsAdmin } from "../support/helpers/sign-in"

const TIMEOUT = 20000

describe("Embedding SDK: shoppy compatibility", () => {
  it("should open an Interactive Dashboard", () => {
    cy.visit({
      url: "/admin/analytics/",
    })

    cy.get("main").within(() => {
      cy.findByText("Orders", {
        timeout: TIMEOUT,
      }).click()

      cy.findByTestId("fixed-width-dashboard-header", {
        timeout: TIMEOUT,
      }).within(() => {
        expect(cy.findByTestId("dashboard-name-heading").should("exist"))
      })

      cy.findByTestId("dashboard-grid", {
        timeout: TIMEOUT,
      }).within(() => {
        expect(
          cy
            .findAllByTestId("dashcard-container")
            .should("have.length.at.least", 1),
        )
      })
    })
  })

  it("should open products list and open a product", () => {
    cy.visit({
      url: "/admin/products",
    })

    cy.get("main").within(() => {
      expect(
        cy
          .findAllByTestId("visualization-root", { timeout: TIMEOUT })
          .should("have.length.at.least", 3),
      )

      cy.findAllByTestId("visualization-root", { timeout: TIMEOUT })
        .first()
        .within(() => {
          expect(
            cy
              .findByTestId("scalar-container", { timeout: TIMEOUT })
              .should("exist"),
          )
        })
        .click()

      expect(
        cy
          .findByText("Course description", { timeout: TIMEOUT })
          .should("exist"),
      )

      // 2 questions on a product details page
      cy.findAllByTestId("visualization-root", { timeout: TIMEOUT }).should(
        "have.length",
        2,
      )
    })
  })

  it("should open a new from scratch page", () => {
    cy.visit({
      url: "/admin/analytics/new/from-scratch",
    })

    cy.get("main").within(() => {
      expect(
        cy
          .findByText("Pick your starting data", { timeout: TIMEOUT })
          .should("exist"),
      )
    })
  })

  it("should open a new from template page", () => {
    cy.visit({
      url: "/admin/analytics/new/from-template",
    })

    cy.get("main").within(() => {
      cy.findByText("Pick a question").click()

      cy.findByTestId("collection-table", { timeout: TIMEOUT })

      cy.findByText("Orders Over Time").click()

      expect(cy.findByTestId("visualization-root").should("exist"))
    })
  })

  it("should open a new dashboard modal", () => {
    cy.visit({
      url: "/admin/analytics/new/dashboard",
    })

    cy.get("body").within(() => {
      cy.findByTestId("new-dashboard-modal", { timeout: TIMEOUT }).within(
        () => {
          expect(cy.findByText("New dashboard").should("exist"))

          cy.findByText("Cancel").click()
        },
      )

      cy.findByText("Saved explorations").click()
    })
  })

  it("should contain the user-generated collection in saved explorations", () => {
    cy.visit({
      url: "/admin",
    })

    cy.get("body").within(() => {
      cy.findByText("Saved explorations", { timeout: TIMEOUT }).click()

      expect(
        cy.findByText("User-Generated", { timeout: TIMEOUT }).should("exist"),
      )
    })
  })

  it("should display dashboards with sandboxing for different shops", () => {
    const getOrdersCountForShop = (site) => {
      cy.log(`Get total orders count for ${site}`)

      cy.findByTestId(`site-switcher-button-${site}`).click()

      return (
        cy
          .findAllByTestId("dashcard-container", { timeout: TIMEOUT })
          // TODO: find a way to not rely on dashboard name
          .filter(":contains('Total Orders')")
          .findByTestId("scalar-container", { timeout: TIMEOUT })
          .invoke("text")
      )
    }

    cy.visit("/admin/analytics")

    cy.get("main").within(() => {
      cy.findByText("Orders", { timeout: TIMEOUT }).click()
    })

    const shops = ["proficiency", "stitch", "luminara", "pug"]
    const counts = []

    cy.wrap(shops).each((site) => {
      getOrdersCountForShop(site).then((text) => {
        counts.push(text)
      })
    })

    cy.then(() => {
      const unique = new Set(counts)

      expect(
        unique.size,
        `All counts: [${counts.join(", ")}]`,
      ).to.be.greaterThan(1)
    })
  })

  // TODO (Kelvin 2026-07-07) bandage, not a fix. Metabase's appdb search-index reindex has a
  // race that can strand a fully-built index as "pending" instead of activating it. Couldn't
  // land the real backend fix yet; this forces a reindex and waits for it first. The actual
  // backend bug (QUE2-736) hasn't landed yet.
  // Scoped to just this test, not the whole suite — it's the only one that needs it.
  describe("data picker", () => {
    before(() => {
      const REINDEX_POLL_INTERVAL_MS = 1000
      const REINDEX_POLL_MAX_ATTEMPTS = 60

      function waitForDatasetIndex(sessionId, attempt = 0) {
        cy.request({
          method: "GET",
          url: `${METABASE_URL}/api/search?models=dataset`,
          headers: { "X-Metabase-Session": sessionId },
        }).then(({ body }) => {
          if (body.total > 0) {
            return
          }
          if (attempt >= REINDEX_POLL_MAX_ATTEMPTS) {
            // Fail loudly here instead of silently proceeding into a doomed test — a confusing
            // "can't find Orders" UI assertion failure downstream is much harder to diagnose than
            // this being the actual problem.
            throw new Error(
              `waitForDatasetIndex: no datasets found after ${attempt} attempts`,
            )
          }

          cy.wait(REINDEX_POLL_INTERVAL_MS)
          waitForDatasetIndex(sessionId, attempt + 1)
        })
      }

      signInAsAdmin().then((sessionId) => {
        cy.request({
          method: "POST",
          url: `${METABASE_URL}/api/search/force-reindex`,
          headers: { "X-Metabase-Session": sessionId },
          failOnStatusCode: false,
        })

        waitForDatasetIndex(sessionId)
      })
    })

    it("should not display tables in the data picker", () => {
      cy.visit({
        url: "/admin/analytics/new/from-scratch",
      })

      cy.get("main").within(() => {
        cy.findByText("Pick your starting data", { timeout: TIMEOUT }).should(
          "exist",
        )
      })

      cy.get("[data-element-id=mantine-popover]", {
        timeout: TIMEOUT,
      }).within(() => {
        cy.log(
          "should contain only a single model without any duplicate tables",
        )
        cy.findAllByText("Orders", { timeout: TIMEOUT }).should(
          "have.length",
          1,
        )
        cy.findAllByText("Orders + Products", { timeout: TIMEOUT }).should(
          "have.length",
          1,
        )
        cy.findAllByText("Products", { timeout: TIMEOUT }).should(
          "have.length",
          1,
        )
      })
    })
  })
})
