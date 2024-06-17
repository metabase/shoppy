import { Redirect, Route, Switch } from "wouter"

import { DEFAULT_ADMIN_ROUTE, Login } from "./Login"
import { Logout } from "./Logout"

import { ProductAnalyticsPage } from "./product-list"
import { ProductDetailPage } from "./product-detail"
import { AnalyticsPage } from "./analytics"
import { KitchenSink } from "./internal/KitchenSink"
import { DynamicDashboardPage } from "./internal/DynamicDashboard"

import { AppProvider } from "../components/AppProvider"
import { AuthCheck } from "../components/AuthCheck"
import { Shell } from "../components/layout/Shell"
import { StaticDashboardPage } from "./internal/StaticDashboard"

export const Routes = () => (
  <Switch>
    <Route path="/login" component={Login} />

    <AuthCheck>
      <Route path="/" component={() => <Redirect to={DEFAULT_ADMIN_ROUTE} />} />

      <AppProvider>
        <Shell>
          <Route path="/admin" nest>
            <Route path="/products" component={ProductAnalyticsPage} />

            <Route
              path="/products/:id"
              component={(props) => <ProductDetailPage id={props.params.id} />}
            />

            <Route path="/analytics" component={AnalyticsPage} />
            <Route path="/analytics/new/from-template" component={() => null} />
            <Route path="/analytics/new/from-scratch" component={() => null} />
            <Route path="/analytics/product" component={() => null} />
            <Route path="/analytics/custom" component={() => null} />
          </Route>

          <Route path="/dev" component={KitchenSink} />
          <Route path="/dash" component={DynamicDashboardPage} />
          <Route path="/dash-static" component={StaticDashboardPage} />
          <Route path="/logout" component={Logout} />
        </Shell>
      </AppProvider>
    </AuthCheck>

    <Route>404: No such page!</Route>
  </Switch>
)
