// hami le dherai actions banauna sakinxa/ painxa.

//action maa vako type key raw reducer maa vako type key same huna parxa hai.. mandatory.

// action just euta plain js function ho jasma hamle logics lekhinxa.

import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART } from "./constant";

export const addToCart = (data) => {
  // console.log("add action called", data)
  return {
    type: ADD_TO_CART,
    data: data,
  };
};

export const removeFromCart = (data) => {
  return {
    type: REMOVE_FROM_CART,
    data: data,
  };
};

export const emptyCart = () => {
  return {
    type: EMPTY_CART,
  };
};
