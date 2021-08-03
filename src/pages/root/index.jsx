import React from "react";
import Routes from "./routes";
import TopAppBar from "./topappbar";
import { HashRouter, Switch, Route } from "react-router-dom";
import Login from "../login";

const DefaultContainer = () => {
  return (
    <div>
      <TopAppBar />
      <Routes />
    </div>
  );
};

const Root = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route component={DefaultContainer} />
      </Switch>
    </HashRouter>
  );
};

export default Root;
