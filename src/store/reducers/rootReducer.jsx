import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import authenticationReducer from "./authentication.Reducer";

//Combine all the reducers
const rootReducers = (history) =>
  combineReducers({
    router: connectRouter(history),
    authentication: authenticationReducer,
  });

export default rootReducers;
