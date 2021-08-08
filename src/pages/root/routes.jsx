import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";
import RouteCustom from "../../components/Routes/RouteCustom";

const main = lazy(() => import("../main"));

const settings = lazy(() => import("../settings"));

const Routes = ({ match }) => {
  console.log(match);
  return (
    <Switch>
      <RouteCustom
        exact
        path={`${match.url}/main`}
        pageTitle="Main Page"
        component={main}
      />
      <RouteCustom
        exact
        path={`${match.url}/settings`}
        pageTitle="Settings"
        component={settings}
      />
    </Switch>
  );
};

export default Routes;
