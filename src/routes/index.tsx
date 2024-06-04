import { Redirect, Route, Switch } from "wouter"

import { DEFAULT_ADMIN_ROUTE, Login } from "./Login"
import { Logout } from "./Logout"

import { ProductAnalyticsPage } from "./product-list"
import { ProductDetailPage } from "./product-detail"
import { KitchenSink } from "./internal/KitchenSink"

import { AppProvider } from "../components/AppProvider"
import { AuthCheck } from "../components/AuthCheck"
import { Shell } from "../components/layout/Shell"

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

            <Route path="/analytics" component={() => null} />
            <Route path="/analytics/new/from-template" component={() => null} />
            <Route path="/analytics/new/from-scratch" component={() => null} />
            <Route path="/analytics/product" component={() => null} />
            <Route path="/analytics/custom" component={() => null} />
          </Route>

          <Route path="/dev" component={KitchenSink} />
          <Route path="/logout" component={Logout} />
        </Shell>
      </AppProvider>

      <Route>404: No such page!</Route>
    </AuthCheck>
  </Switch>
)
