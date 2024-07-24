import { Redirect, Route, Switch } from "wouter"

import { ProductAnalyticsPage } from "./product-list"
import { ProductDetailPage } from "./product-detail"

import { QuestionPage } from "./analytics/QuestionPage"
import { DashboardPage } from "./analytics/DashboardPage"
import { AnalyticsOverviewPage } from "./analytics/AnalyticsOverviewPage"
import { AnalyticsCustomPage } from "./analytics/AnalyticsCustomPage"

import { KitchenSink } from "./internal/KitchenSink"

import { AppProvider } from "../components/AppProvider"
import { AuthCheck } from "../components/AuthCheck"
import { Shell } from "../components/layout/Shell"
import { DynamicDashboardPage } from "./internal/DynamicDashboard"
import { InteractiveQuestionPage } from "./internal/InteractiveQuestionPage"

export const Routes = () => (
  <Switch>
    <AuthCheck>
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
                component={(props) => (
                  <ProductDetailPage id={props.params.id} />
                )}
              />
            </Switch>

            <Switch>
              <Route path="/analytics" component={AnalyticsOverviewPage} />
              <Route path="/analytics/custom" component={AnalyticsCustomPage} />

              <Route
                path="/analytics/:id"
                component={(props) => <DashboardPage id={props.params.id} />}
              />

              <Route
                path="/analytics/new/from-template"
                component={() => null}
              />
              <Route
                path="/analytics/new/from-scratch"
                component={() => null}
              />
            </Switch>

            <Route
              path="/question/:id"
              component={(props) => <QuestionPage id={props.params.id} />}
            />
          </Route>

          <Route path="/dev" component={KitchenSink} />
          <Route path="/dash" component={DynamicDashboardPage} />
          <Route path="/question" component={InteractiveQuestionPage} />
        </Shell>
      </AppProvider>
    </AuthCheck>

    <Route>404: No such page!</Route>
  </Switch>
)
