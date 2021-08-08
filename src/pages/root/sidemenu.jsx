import React from "react";
import clsx from "clsx";
import { useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
// import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import EventNoteIcon from "@material-ui/icons/EventNote";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import SettingsApplicationsIcon from "@material-ui/icons/SettingsApplications";
import { Link } from "react-router-dom";

const SideMenu = ({ useStyles, open, setOpen }) => {
  const classes = useStyles();
  const theme = useTheme();

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        }),
      }}
    >
      <div className={classes.toolbar}>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </div>
      <Divider />
      <List>
        <ListItem
          button
          component={Link}
          to="/v1/main"
          selected={selectedIndex === 1}
          onClick={() => setSelectedIndex(1)}
        >
          <ListItemIcon>
            <EventNoteIcon />
          </ListItemIcon>
          <ListItemText primary={"Scheduler"} />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem
          button
          component={Link}
          to="/v1/settings"
          selected={selectedIndex === 2}
          onClick={() => setSelectedIndex(2)}
        >
          <ListItemIcon>
            <SettingsApplicationsIcon />
          </ListItemIcon>
          <ListItemText primary={"Settings"} />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideMenu;
