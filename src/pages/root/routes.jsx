import React, { lazy } from "react";
import { Route } from "react-router-dom";

const main = lazy(() => import("../main"));

const Routes = ({ match }) => {
  console.log(match);
  return (
    <>
      <Route exact path={`${match.url}/main`} component={main} />
    </>
  );
};

export default Routes;
