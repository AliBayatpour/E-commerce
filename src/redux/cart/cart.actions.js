import { CartActionTypes } from "./cart.types";
export const toggleCartHidden = () => ({
  type: CartActionTypes.CART_ACTION_HIDDEN
});

export const addItem = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
});