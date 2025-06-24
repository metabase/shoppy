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

  it("should open a new dashboard modal", () => {
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

  it("should contain the user-generated collection in saved explorations", () => {
    cy.visit({
      url: "/admin",
    })

    cy.get("#metabase-sdk-root").within(() => {
      cy.findByText("Saved explorations", { timeout: TIMEOUT }).click()

      expect(
        cy.findByText("User-Generated", { timeout: TIMEOUT }).should("exist"),
      )
    })
  })

  it("should display dashboards with sandboxing for different shops", () => {
    const getOrdersCountForShop = (site) => {
      cy.findByTestId(`site-switcher-button-${site}`).click()

      return cy
        .findAllByTestId("scalar-title", { timeout: TIMEOUT })
        .filter((_, element) => element.textContent.trim() === "Total Orders")
        .prev('[data-testid="scalar-container"]')
        .invoke("text")
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
      cy.log("should contain only models")
      cy.findAllByText("Orders", { timeout: TIMEOUT }).should("have.length", 1)

      cy.log("should not contain any tables")
      cy.findByText("Shops", { timeout: TIMEOUT }).should("not.exist")
      cy.findByText("Product Categories", { timeout: TIMEOUT }).should(
        "not.exist",
      )
    })
  })
})
