import React, { Suspense, lazy } from "react";
import Routes from "./routes";
import TopAppBar from "./topappbar";
import { BrowserRouter, Route } from "react-router-dom";
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

const LoginContainer = ({ match }) => {
  // const classes = useStyles();
  return (
    <>
      <Route exact path="/sign-in" component={SignIn} />
      <Route exact path="/forgot-password" component={ForgotPass} />
      <Route exact path="/sign-up" component={SignUp} />
    </>
  );
};

const DefaultContainer = ({ match }) => {
  return (
    <div>
      <TopAppBar />
      <Routes match={match} />
    </div>
  );
};

const Root = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<LazyPageLoader />}>
        {/* <Switch> */}
        <Route path="/v1" component={DefaultContainer} />
        <Route component={LoginContainer} />
        {/* </Switch> */}
      </Suspense>
    </BrowserRouter>
  );
};

export default Root;
