import { Route, Switch } from "wouter"

import { SignIn } from "./SignIn"

import { ProductAnalyticsPage } from "./product-list"
import { ProductDetailPage } from "./product-detail"
import { KitchenSink } from "./internal/KitchenSink"

import { Shell } from "../components/layout/Shell"
import { AppProvider } from "../components/AppProvider"
import { AnalyticsPage } from "./analytics"

export const Routes = () => (
  <Switch>
    <Route path="/" component={SignIn} />

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

          <Route path="/internal/kitchen-sink" component={KitchenSink} />
        </Route>
      </Shell>
    </AppProvider>

    <Route>404: No such page!</Route>
  </Switch>
)
