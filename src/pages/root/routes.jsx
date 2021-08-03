import React, { Suspense, lazy } from "react";
import LazyPageLoader from "../../components/LazyPageLoader";
import { Switch, Route } from "react-router-dom";

const main = lazy(() => import("../main"));

const Routes = () => {
  return (
    <>
      <Suspense fallback={<LazyPageLoader />}>
        <Switch>
          <Route path="/main" component={main} />
        </Switch>
      </Suspense>
    </>
  );
};

export default Routes;
