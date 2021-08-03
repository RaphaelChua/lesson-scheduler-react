import React, { Suspense, lazy } from "react";
import Routes from "./routes";
import TopAppBar from "./topappbar";
import { HashRouter, Switch, Route } from "react-router-dom";
// import { makeStyles } from "@material-ui/core/styles";
import LazyPageLoader from "../../components/LazyPageLoader";

const SignIn = lazy(() => import("../login/signin"));
const SignUp = lazy(() => import("../login/signup"));
const ForgotPass = lazy(() => import("../login/forgotpass"));

// const useStyles = makeStyles((theme) => ({
//   root: {
//     backgroundImage: `url(${"https://blog.prezi.com/wp-content/uploads/2019/03/asoggetti-318284-unsplash-1024x684.jpg"}
//     )`,
//     backgroundSize: "100vw 100vh",
//     backgroundPosition: "center",
//   },
// }));

const LoginContainer = () => {
  // const classes = useStyles();
  return (
    <>
      <Suspense fallback={<LazyPageLoader />}>
        <Switch>
          <Route path="/sign-in" component={SignIn} />
          <Route path="/forgot-password" component={ForgotPass} />
          <Route path="/sign-up" component={SignUp} />
        </Switch>
      </Suspense>
    </>
  );
};

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
        <Route component={LoginContainer} />
        <Route component={DefaultContainer} />
      </Switch>
    </HashRouter>
  );
};

export default Root;
