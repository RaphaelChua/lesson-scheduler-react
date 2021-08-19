import HTTPClient from "./HTTPClient";

export const authenticate = (email, password) =>
  HTTPClient.Post(`v1/user/authenticate`, { email, password });

export const getAppointments = (date) =>
  HTTPClient.Get(`v1/appointments?date=${date}`);
