import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART } from "./constant";

export const cartData = (data = [], action) => {
  //it takes two parameter: first: initial value, second: action
  // if(action.type === ADD_TO_CART) {
  //     console.log("reducer called",action)
  //     return action.data
  // }else{
  //     return msg
  // }

  switch (action.type) {
    case ADD_TO_CART:
      //  console.log("add reducer called",action)
      return [action.data, ...data];

    case REMOVE_FROM_CART:
      const remainingItems = data.filter((item) => item.id !== action.data);
      return [...remainingItems];

    case EMPTY_CART:
      data = [];
      return [...data];

    default:
      return data;
  }
};
