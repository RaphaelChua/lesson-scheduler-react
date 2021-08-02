import React, { Suspense, lazy } from "react";

import { HashRouter, Switch, Route } from "react-router-dom";

const login = lazy(() => import("../login"));

const main = lazy(() => import("../main"));

const Routes = () => {
  return (
    <div>
      <HashRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/main" component={main} />
            <Route path="/login" component={login} />
          </Switch>
        </Suspense>
      </HashRouter>
    </div>
  );
};

export default Routes;
