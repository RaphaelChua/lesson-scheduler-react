import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
  },
}));

const LazyPageLoader = ({ color, variant, value }) => {
  const classes = useStyles();
  return (
    <CircularProgress
      className={classes.root}
      color={color}
      value={value}
      variant={variant}
    />
  );
};

export default LazyPageLoader;
