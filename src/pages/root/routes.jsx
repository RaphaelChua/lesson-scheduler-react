import React, { Suspense, lazy } from "react";

import { Switch, Route } from "react-router-dom";

const login = lazy(() => import("../login"));

const main = lazy(() => import("../main"));

const Routes = () => {
  return (
    <>
      <Suspense fallback={<div>Loading......</div>}>
        <Switch>
          <Route path="/main" component={main} />
          <Route path="/login" component={login} />
        </Switch>
      </Suspense>
    </>
  );
};

export default Routes;
