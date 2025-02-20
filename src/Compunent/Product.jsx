import React from "react";
import { Outlet } from "react-router-dom";

const Product = () => {
  return (
    <div>
      <h1>Product</h1>
      <button>Mackbook</button>
      <button>Window</button>
      <h1>Tab:</h1>
      <Outlet />
    </div>
  );
};

export default Product;
