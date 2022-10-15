import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../components/Main";
import Cart from "../components/Cart";
const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default Router;
