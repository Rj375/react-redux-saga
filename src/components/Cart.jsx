import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Cart = () => {
  const cartData = useSelector((state) => state.cartData);

  let amount = cartData.length && cartData.map((item) => item.price).reduce((prev, next) => prev + next);
  return (
    <div>
      <Link to="/">Product Lists</Link>
      <h1>Cart Page</h1>
      <div className="cart-page-container">
        <table border="1" cellSpacing="0" style={{ borderColor: "#ccc" }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Color</th>
              <th>Price</th>
              <th>Brand</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {cartData.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.color}</td>
                <td>${item.price}</td>
                <td>{item.brand}</td>
                <td>{item.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="price-details">
          <div className="adjust-price">
            <span>Amount</span> <span>${amount}</span>
          </div>
          <div className="adjust-price">
            <span>Discount</span> <span>${amount/10}</span>
          </div>
          <div className="adjust-price">
            <span>Tax</span> <span>$0000</span>
          </div>
          <div className="adjust-price">
            <span>Total</span> <span>${amount-(amount/10)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
