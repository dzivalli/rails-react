import * as types from "src/constants/actionTypes/CartActionTypes";

import { getCart } from "src/helpers/cartPersistence";

const initialState = {
  products: []
};

export default function(state = initialState, action) {
  let products;

  switch (action.type) {
    case types.ADD_PRODUCT:
      products = state.products.slice(0);
      products.push(action.product);
      return Object.assign({}, state, { products });
    case types.GET_PRODUCTS_FROM_LOCAL_STORAGE:
      return Object.assign({}, state, getCart());
    default:
      return state;
  }
}
