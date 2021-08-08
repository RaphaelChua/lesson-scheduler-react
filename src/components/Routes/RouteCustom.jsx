import React from "react";
import { Route, useLocation } from "react-router-dom";

const RouteCustom = ({
  component: Component,
  pageTitle,
  exact,
  path,
  ...rest
}) => {
  const location = useLocation();

  React.useEffect(() => {
    document.title = pageTitle;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <Route
      {...rest}
      exact={exact}
      path={path}
      render={(props) => {
        return <Component {...props} />;
      }}
    />
  );
};

export default RouteCustom;
