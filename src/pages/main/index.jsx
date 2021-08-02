import React from "react";
import Paper from "@material-ui/core/Paper";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  MonthView,
  Toolbar,
  DateNavigator,
  Appointments,
  TodayButton,
} from "@devexpress/dx-react-scheduler-material-ui";

// import { appointments } from "../../../demo-data/month-appointments";

const currentDate = "2018-07-17";

const Main = () => {
  const [date, setDate] = React.useState("2021-08-02");

  return (
    <Paper>
      <Scheduler>
        <ViewState currentDate={date} />
        <MonthView />
        <Toolbar />
        <DateNavigator />
        <TodayButton />
        <Appointments />
      </Scheduler>
    </Paper>
  );
};

export default Main;
