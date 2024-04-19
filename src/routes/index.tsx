import { Route, Switch } from "wouter"

import { SignIn } from "./SignIn"

import { Shell } from "../components/Shell"
import { ProductAnalyticsPage } from "./ProductAnalytics"
import { ProductDetailPage } from "./ProductDetailPage"

export const Routes = () => (
  <Switch>
    <Route path="/" component={SignIn} />

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
    </Shell>

    <Route>404: No such page!</Route>
  </Switch>
)
