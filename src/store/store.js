import {
  legacy_createStore as createStore,
  compose,
  applyMiddleware,
} from "redux";
// import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

const logger = (store) => (next) => (action) => {
  console.log("currentState: ", store.getState());
  next(action);
  console.log("nextState: ", store.getState());
};

const middlewares = [logger];
const enhancers = compose(applyMiddleware(...middlewares));

export const store = createStore(rootReducer, undefined, enhancers);
