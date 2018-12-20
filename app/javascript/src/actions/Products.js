import API_CALL from "src/constants/API_CALL";
import * as types from "src/constants/actionTypes/ProductsActionTypes";

export const requestProducts = () => ({
  [API_CALL]: {
    endpoint: "/products",
    method: "GET",
    types: [
      types.FETCH_PRODUCTS_REQUEST,
      types.FETCH_PRODUCTS_SUCCESS,
      types.FETCH_PRODUCTS_ERROR
    ]
  }
});
