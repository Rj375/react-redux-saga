// import {createStore} from 'redux'
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer"; // rootReducer bata data aunxa aba
import productSaga from "./middleware/productSaga";
import createSagaMiddleware from "redux-saga";

// const store = createStore(rootReducer)  // store ko input chai reducer hunxa jaile pani.
const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: rootReducer,
  middleware: () => [sagaMiddleware],
});
sagaMiddleware.run(productSaga);
export default store;
