import { Redirect, Route, Switch } from "wouter"

import { ProductAnalyticsPage } from "./product-list"
import { ProductDetailPage } from "./product-detail"

import { QuestionPage } from "./analytics/QuestionPage"
import { DashboardPage } from "./analytics/DashboardPage"
import { AnalyticsOverviewPage } from "./analytics/AnalyticsOverviewPage"
import { AnalyticsCustomPage } from "./analytics/AnalyticsCustomPage"
import { NewFromTemplatePage } from "./analytics/new/NewFromTemplatePage"
import { NewFromScratchPage } from "./analytics/new/NewFromScratchPage"
import { NewDashboardPage } from "./analytics/new/NewDashboardPage"

import { KitchenSink } from "./internal/KitchenSink"

import { AppProvider } from "../components/AppProvider"
import { Shell } from "../components/layout/Shell"

export const Routes = () => (
  <Switch>
    <Route path="/" component={() => <Redirect to="/admin/products" />} />

    <AppProvider>
      <Shell>
        <Route path="/admin" nest>
          <Switch>
            <Route
              path="/products"
              component={() => <ProductAnalyticsPage />}
            />

            <Route
              path="/categories/:id"
              component={(props) => (
                <ProductAnalyticsPage categoryId={props.params.id} />
              )}
            />

            <Route
              path="/products/:id"
              component={(props) => <ProductDetailPage id={props.params.id} />}
            />
          </Switch>

          <Switch>
            <Route path="/analytics" component={AnalyticsOverviewPage} />
            <Route path="/analytics/custom" component={AnalyticsCustomPage} />

            <Route
              path="/analytics/:id"
              component={(props) => (
                <DashboardPage entity_id={props.params.id} />
              )}
            />

            <Route
              path="/analytics/new/from-template"
              component={NewFromTemplatePage}
            />

            <Route
              path="/analytics/new/from-scratch"
              component={NewFromScratchPage}
            />

            <Route
              path="/analytics/new/dashboard"
              component={NewDashboardPage}
            />
          </Switch>

          <Route
            path="/question/:id"
            component={(props) => <QuestionPage id={props.params.id} />}
          />
        </Route>

        <Route path="/dev" component={KitchenSink} />
      </Shell>
    </AppProvider>

    <Route>404: No such page!</Route>
  </Switch>
)
