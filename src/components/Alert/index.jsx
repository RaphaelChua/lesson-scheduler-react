import React from "react";
import { types } from "./types";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

export const AlertProvider = (props) => {
  const initialAlert = {
    // alert: false,
    message: "",
    types: "",
  };

  const [alert, setAlert] = React.useState(initialAlert);
  const [open, setOpen] = React.useState(false);

  const alertContext = React.useRef(null);

  const closeOnTimeout = () => {
    setAlert({ ...alert, alert: false, message: "", types: "" });
  };

  const show = React.useCallback((message = "", options = {}) => {
    const setNewAlert = {
      message: message,
      types: options.type,
    };
    setAlert(setNewAlert);
    setTimeout(closeOnTimeout, 5000);
  }, []);

  const error = React.useCallback(
    (message = "", options = {}) => {
      options.type = types.DANGER;
      return show(message, options);
    },
    [show]
  );

  const success = React.useCallback(
    (message = "", options = {}) => {
      options.type = types.SUCCESS;
      return show(message, options);
    },
    [show]
  );

  const warning = React.useCallback(
    (message = "", options = {}) => {
      options.type = types.WARNING;
      return show(message, options);
    },
    [show]
  );

  const info = React.useCallback(
    (message = "", options = {}) => {
      options.type = types.INFO;
      return show(message, options);
    },
    [show]
  );

  const danger = React.useCallback(
    (message = "", options = {}) => {
      options.type = types.DANGER;
      return show(message, options);
    },
    [show]
  );

  const primary = React.useCallback(
    (message = "", options = {}) => {
      options.type = types.PRIMARY;
      return show(message, options);
    },
    [show]
  );

  const secondary = React.useCallback(
    (message = "", options = {}) => {
      options.type = types.SECONDARY;
      return show(message, options);
    },
    [show]
  );

  alertContext.current = {
    show,
    success,
    info,
    error,
    warning,
    danger,
    primary,
    secondary,
  };

  const handleClose = () => {
    setAlert({ message: "", types: "" });
    setOpen(false);
  };

  const Alert = (props) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  };

  const alertContainer = () => {
    <h1>FUCK</h1>;
    // <Snackbar open={true} autoHideDuration={6000} onClose={handleClose}>
    //   <Alert onClose={handleClose} severity={alert.types}>
    //     {alert.message}
    //   </Alert>
    // </Snackbar>;
  };

  //   const alertContainer = () => {
  //     if (alert.alert) {
  //       return (
  //         <div className="alerts-fixed">
  //           <ReactAlert
  //             variant={alert.types}
  //             onClose={() => setAlert({ alert: false, message: "", types: "" })}
  //             dismissible
  //             className="alert-pad"
  //           >
  //             {alert.message}
  //           </ReactAlert>
  //         </div>
  //       );
  // };

  console.log("FUCK++++");

  return (
    <AlertContext.Provider value={alertContext}>
      {alertContainer()}
      {props.children}
    </AlertContext.Provider>
  );
};

export const AlertContext = React.createContext({});

export const useAlert = (Context = null) => {
  const alertContext = React.useContext(Context || AlertContext);
  const alert = React.useMemo(() => {
    return alertContext.current;
  }, [alertContext]);
  return alert;
};
