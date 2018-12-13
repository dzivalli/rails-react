import * as types from "src/constants/actionTypes/CartActionTypes"

export function addProduct(product) {
  return {
    type: types.ADD_PRODUCT,
    product
  }
}

