import React, { Suspense, lazy } from "react";
import Routes from "./routes";
import TopAppBar from "./topappbar";
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter as CRouter } from "connected-react-router";
import { history } from "../../utils/history";
import { makeStyles } from "@material-ui/core/styles";
import LazyPageLoader from "../../components/LazyPageLoader";
import { CssBaseline } from "@material-ui/core";
import SideMenu from "./sidemenu";
import RouteCustom from "../../components/Routes/RouteCustom";

const SignIn = lazy(() => import("../login/signin"));
const SignUp = lazy(() => import("../login/signup"));
const ForgotPass = lazy(() => import("../login/forgotpass"));

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  sectionDesktop: {
    // display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },

  grow: {
    flexGrow: 1,
  },
}));

const LoginContainer = ({ match }) => {
  // const classes = useStyles();
  return (
    <Switch>
      <RouteCustom
        exact
        path="/sign-in"
        pageTitle="Sign In"
        component={SignIn}
      />
      <RouteCustom
        exact
        path="/forgot-password"
        pageTitle="Forgot Password"
        component={ForgotPass}
      />
      <RouteCustom
        exact
        path="/sign-up"
        pageTitle="Sign Up"
        component={SignUp}
      />
    </Switch>
  );
};

const DefaultContainer = ({ match }) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  return (
    <div className={classes.root}>
      <CssBaseline />
      <TopAppBar classes={classes} open={open} setOpen={setOpen} />
      <SideMenu useStyles={useStyles} open={open} setOpen={setOpen} />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Routes match={match} />
      </main>
    </div>
  );
};

const Root = () => {
  return (
    <CRouter history={history}>
      <Suspense fallback={<LazyPageLoader />}>
        <Switch>
          {/* <Route path="/v1" component={DefaultContainer} /> */}
          <Route component={LoginContainer} />
        </Switch>
      </Suspense>
    </CRouter>
  );
};

export default Root;
