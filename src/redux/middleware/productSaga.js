import { takeEvery, put } from "redux-saga/effects";
import { PRODUCT_LIST, SET_PRODUCT_LIST,PRODUCT_SEARCH } from "../constant";

function* getProducts() {
  let data = yield fetch("http://localhost:3500/product");
  data = yield data.json();
  yield put({ type: SET_PRODUCT_LIST, data: data });
}

function* getProductSearch(data) {
    let searchData = yield fetch(`http://localhost:3500/product?q=${data.query}`)
    searchData = yield searchData.json();
    yield put({ type: SET_PRODUCT_LIST, data: searchData });
}

//it is a generator function
function* productSaga() {
  yield takeEvery(PRODUCT_LIST, getProducts);
  yield takeEvery(PRODUCT_SEARCH, getProductSearch);
}

export default productSaga;
