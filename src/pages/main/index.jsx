import React from "react";
import Paper from "@material-ui/core/Paper";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  MonthView,
  WeekView,
  Toolbar,
  DateNavigator,
  Appointments,
  TodayButton,
} from "@devexpress/dx-react-scheduler-material-ui";
import { getAppointments } from "../../services/API";
import dayjs from "dayjs";

const Main = () => {
  const [data, setData] = React.useState();

  const [currentDate, setCurrentDate] = React.useState(dayjs().toDate());
  React.useEffect(() => {
    getAppointments(dayjs().toISOString()).then((data) => {
      setData(data.data);
    });
  }, []);
  //   const [date, setDate] = React.useState("2021-08-02");

  const onNavigateHandler = (direction) => {
    console.log(direction);
  };

  return (
    <Paper>
      <Scheduler data={data}>
        <ViewState
          defaultCurrentDate={dayjs().toDate()}
          currentDate={currentDate}
        />
        <MonthView />
        <Toolbar />
        <DateNavigator onNavigate={onNavigateHandler} />
        <TodayButton />
        <Appointments />
      </Scheduler>
    </Paper>
  );
};

export default Main;
