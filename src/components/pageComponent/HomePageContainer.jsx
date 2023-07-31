import React from "react";
import ProductCard from "../UI/ProductCard";

const HomePageContainer = ({ products }) => {
  return (
    <div className="grid grid-cols-3 gap-5 my-10 max-w-7xl mx-auto">
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default HomePageContainer;
