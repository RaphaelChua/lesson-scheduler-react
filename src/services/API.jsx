import httpClient from "./HTTPClient";

export const authenticate = (email, password) =>
  httpClient.Post(`v1/user/authenticate`, { email, password });
