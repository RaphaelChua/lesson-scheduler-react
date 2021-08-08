import { ListItem } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import React from "react";

const ListItemCustom = ({ children, link, ...rest }) => {
  const history = useHistory();

  return (
    <ListItem {...rest} onClick={() => history.push(link)}>
      {children}
    </ListItem>
  );
};

export { ListItemCustom };
