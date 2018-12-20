import * as types from "src/constants/actionTypes/ProductsActionTypes";

const initialState = {
  isFetching: false,
  error: false,
  entries: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_PRODUCTS_REQUEST:
      return Object.assign({}, state, { isFetching: true });
    case types.FETCH_PRODUCTS_ERROR:
      return Object.assign({}, state, { error: true });
    case types.FETCH_PRODUCTS_SUCCESS:
      return Object.assign({}, state, { entries: action.data.products });
    default:
      return state;
  }
}
