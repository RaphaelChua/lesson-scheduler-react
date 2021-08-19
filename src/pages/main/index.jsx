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
  ViewSwitcher,
  DayView,
} from "@devexpress/dx-react-scheduler-material-ui";
import { getAppointments } from "../../services/API";
import dayjs from "dayjs";

const Main = () => {
  const [data, setData] = React.useState();

  const [currentView, setCurrentView] = React.useState();
  const [currentDate, setCurrentDate] = React.useState(dayjs().toDate());
  React.useEffect(() => {
    getAppointments(dayjs().toISOString()).then((data) => {
      setData(data.data);
    });
  }, []);

  const onNavigateHandler = (newDate) => {
    console.log(newDate);
    getAppointments(newDate).then((data) => {
      setData(data.data);
    });
    setCurrentDate(newDate);
  };

  const handleViewNameChange = (viewName) => {
    console.log(viewName);
    setCurrentView(viewName);
  };

  return (
    <Paper>
      <Scheduler data={data}>
        <ViewState
          defaultCurrentDate={dayjs().toDate()}
          currentDate={currentDate}
          onCurrentDateChange={onNavigateHandler}
          currentViewName={currentView}
          onCurrentViewNameChange={handleViewNameChange}
        />
        <MonthView />
        <DayView />
        <WeekView />
        <Toolbar />
        <DateNavigator />
        <TodayButton />
        <ViewSwitcher />
        <Appointments />
      </Scheduler>
    </Paper>
  );
};

export default Main;
