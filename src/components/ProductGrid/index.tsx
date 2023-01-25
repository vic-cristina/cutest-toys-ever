import React from "react";
import Product from "../Product";

const ProductGrid = () => {
  return (
    <div className="hero basis-8/12 bg-base-200 rounded-xl">
      <div className="hero-content flex-wrap flex-col lg:flex-row ">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};

export default ProductGrid;
