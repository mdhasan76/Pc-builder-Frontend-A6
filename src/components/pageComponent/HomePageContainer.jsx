import React from "react";
import ProductCard from "../UI/ProductCard";

const HomePageContainer = () => {
  return (
    <div className="grid grid-cols-3 gap-5 my-10 max-w-7xl mx-auto">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};

export default HomePageContainer;
