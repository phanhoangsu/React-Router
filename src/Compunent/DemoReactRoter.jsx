import React from "react";
import { Route, Routes } from "react-router-dom";
import Product from "./Product";
import Laptop from "./Laptop";
import Desktop from "./Desktop";
import ListProduct from "./ListProduct";

const DemoReactRoter = () => {
  return (
    <div>
      {/* <h1>Hello </h1> */}
      <Routes>
        <Route path="/" element={<h1>Home</h1>}></Route>
        <Route path="/blog/:code" element={<h1>Blog</h1>}></Route>

        <Route path="/products" element={<Product />}>
          <Route index element={<ListProduct />} />
          <Route path="laptop" element={<Laptop />} />
          <Route path="desktop" element={<Desktop />} />
        </Route>
        <Route path="*" element={<h1>NOT FOUND</h1>}></Route>
      </Routes>
    </div>
  );
};

export default DemoReactRoter;
