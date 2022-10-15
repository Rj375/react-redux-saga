/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { addToCart, removeFromCart, emptyCart } from "../redux/action";
import { productList } from "../redux/productAction";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productList());
  }, []);

  const products = useSelector((state) => state.productData);

  const handleAddToCart = (productData) => {
    dispatch(addToCart(productData));
  };

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };
  const handleEmptyCart = () => {
    dispatch(emptyCart());
  };

  return (
    <div className="main">
      <button onClick={handleEmptyCart}>Empty Cart</button>

      <div className="product-container">
        {products.map((productData) => (
          <div key={productData.id} className="product-item">
            <img src={productData.image} alt={productData.name} />
            <div>Name : {productData.name}</div>
            <div>Color : {productData.color}</div>
            <div>Brand : {productData.brand}</div>
            <div>Price : ${productData.price}</div>
            <div>Category : {productData.category}</div>
            <div>
              <button onClick={() => handleAddToCart(productData)}>
                Add To Cart
              </button>
              <button onClick={() => handleRemoveFromCart(productData.id)}>
                Remove From Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
