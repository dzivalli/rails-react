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
