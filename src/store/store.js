import {
  legacy_createStore as createStore,
  compose,
  applyMiddleware,
} from "redux";
import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

const middlewares = [logger];
const enhancers = compose(applyMiddleware(...middlewares));

export const store = createStore(rootReducer, undefined, enhancers);
