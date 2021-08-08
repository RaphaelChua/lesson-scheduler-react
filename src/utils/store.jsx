import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { routerMiddleware } from "connected-react-router";
import rootReducers from "../store/reducers/rootReducer";
import { history } from "./history";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;

const middleware = [thunk, routerMiddleware(history)];

// const enhancers = [];

// if (process.env.REACT_APP_NODE_ENV === "development") {
//   const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

//   if (typeof devToolsExtension === "function") {
//     enhancers.push(devToolsExtension());
//   }
// }

const resetEnhancer = (rootReducers) => (state, action) => {
  if (action.type !== "RESET") {
    return rootReducers(state, action);
  }
  const newState = rootReducers(undefined, {});
  newState.router = state.router;
  return newState;
};

export default function configureStore(initialState) {
  const store = createStore(
    resetEnhancer(rootReducers(history)),
    initialState,
    // compose(applyMiddleware(thunk))
    composeEnhancer(applyMiddleware(...middleware))
  );
  return store;
}
