import { combineReducers, createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";

import reducers from "src/reducers";
import storeCartToLocalStorage from "./middlewares/storeCartToLocalStorage"

const store = createStore(
  combineReducers(reducers),
  applyMiddleware(storeCartToLocalStorage, thunk)
);

export default store;
