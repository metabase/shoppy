import { Route, Switch } from "wouter"

import { SignIn } from "./SignIn"

export const Routes = () => (
  <Switch>
    <Route path="/" component={SignIn} />

    <Route>404: No such page!</Route>
  </Switch>
)
