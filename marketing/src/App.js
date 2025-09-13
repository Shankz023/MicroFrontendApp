import React from "react";
import { Switch, Route, Router } from "react-router-dom/cjs/react-router-dom";
import { StylesProvider } from "@material-ui/core";

import Landing from "./components/Landing";
import Pricing from "./components/Pricing";

export default ({history}) => {
  return (
    <StylesProvider injectFirst>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/pricing" component={Pricing} />
        </Switch>
      </Router>
    </StylesProvider>
  );
}