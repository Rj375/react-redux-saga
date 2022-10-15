// hami le dherai reducers banauna sakinxa... tara tinur lai yo rootReducer maa leraw rakhnu parxa

// reducer le store ko data lai handle garxa. store ko data update garne kaam pani reducer le garxa.
// paila react bata action le ligxa data ani reducer maa pathaunxa.
// ani reducer bata store maa janxa data.

import { combineReducers } from "redux";
import { cartData } from "./reducer";
import { productData } from "./productReducer";

export default combineReducers({
  // yaha bata aba store maa janxa data.
  cartData, // it is cartData: cartData , cuz both key and value have same name we can write directly.
  productData,
});
