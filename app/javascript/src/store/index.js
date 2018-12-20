import { combineReducers, createStore, applyMiddleware } from "redux";

import reducers from "src/reducers";
import middleware from "./middleware";

const store = createStore(
  combineReducers(reducers),
  applyMiddleware(...middleware)
);

export default store;
