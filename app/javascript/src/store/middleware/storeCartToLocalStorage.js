import { ADD_PRODUCT } from "src/constants/actionTypes/CartActionTypes";

import { saveCart } from "src/helpers/cartPersistence";

const storeCartToLocalStorage = store => next => action => {
  next(action);
  if (action.type !== ADD_PRODUCT) return;

  let cart = store.getState().cart;
  saveCart(cart);
};

export default storeCartToLocalStorage;
