import HTTPClient from "./HTTPClient";

export const authenticate = (email, password) =>
  HTTPClient.Post(`v1/user/authenticate`, { email, password });
