import * as types from "src/constants/actionTypes/CartActionTypes"

const initialState = {
  products: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.ADD_PRODUCT:
      let products = state.products.slice(0);

      products.push(action.product);
      return Object.assign({}, state, { products });
    default:
      return state;
  }
}
