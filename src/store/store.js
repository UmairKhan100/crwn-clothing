import {
  legacy_createStore as createStore,
  compose,
  applyMiddleware,
} from "redux";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { rootReducer } from "./root-reducer";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [logger];
const enhancers = compose(applyMiddleware(...middlewares));

export const store = createStore(persistedReducer, undefined, enhancers);
export const persistor = persistStore(store);
