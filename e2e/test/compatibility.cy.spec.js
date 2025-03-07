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
        expect(cy.findByText('A look at "Orders"').should("exist"))
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

      expect(cy.findByText("Details", { timeout: TIMEOUT }).should("exist"))

      cy.findByText("Orders over time", { timeout: TIMEOUT })
        .next()
        .within(() => {
          expect(cy.findAllByTestId("visualization-root").should("exist"))
        })

      cy.findByText("Total orders", { timeout: TIMEOUT })
        .next()
        .within(() => {
          expect(cy.findAllByTestId("visualization-root").should("exist"))
        })
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

  it.skip("should open a new dashboard modal", () => {
    cy.visit({
      url: "/admin/analytics/new/dashboard",
    })

    cy.get("#metabase-sdk-root").within(() => {
      cy.findByTestId("new-dashboard-modal", { timeout: TIMEOUT }).within(
        () => {
          expect(cy.findByText("New dashboard").should("exist"))

          cy.findByText("Cancel").click()
        },
      )

      cy.findByText("Saved explorations").click()
    })
  })

  it("should open user created dashboards", () => {
    cy.visit({
      url: "/admin",
    })

    cy.get("#metabase-sdk-root").within(() => {
      cy.findByText("Saved explorations", { timeout: TIMEOUT }).click()

      cy.findByText("User-Generated", { timeout: TIMEOUT }).click()

      expect(
        cy
          .findAllByTestId("collection-entry")
          .should("have.length.at.least", 1),
      )
    })
  })
})
