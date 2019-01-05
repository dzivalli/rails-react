import API_CALL from "src/constants/API_CALL";
import * as types from "src/constants/actionTypes/CartActionTypes";

export function addProduct(product) {
  return {
    type: types.ADD_PRODUCT,
    product
  };
}

export function getProductsFromLocalStorage() {
  return {
    type: types.GET_PRODUCTS_FROM_LOCAL_STORAGE
  };
}

export const submitOrder = (payload) => ({
  [API_CALL]: {
    endpoint: "/dummy",
    method: "POST",
    payload,
    types: [
      types.SUBMIT_ORDER_REQUEST,
      types.SUBMIT_ORDER_SUCCESS,
      types.SUBMIT_ORDER_ERROR
    ]
  }
});
