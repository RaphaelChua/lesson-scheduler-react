import React from "react";
import Paper from "@material-ui/core/Paper";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  MonthView,
  Appointments,
} from "@devexpress/dx-react-scheduler-material-ui";

// import { appointments } from "../../../demo-data/month-appointments";

const currentDate = "2018-07-17";

const Main = () => {
  return (
    <Paper>
      <Scheduler>
        <ViewState currentDate={currentDate} />
        <MonthView />
        <Appointments />
      </Scheduler>
    </Paper>
  );
};

export default Main;
