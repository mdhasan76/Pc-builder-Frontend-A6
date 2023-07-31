import React from "react";
import ProductCard from "../UI/ProductCard";

const CategoryProducts = ({ products }) => {
  // console.log(products, "category products");
  if(!products){
    return <h1 className="text-xl font-bold text-center mt-10">Loading....</h1>
  }
  return (
    <div className="grid grid-cols-3 gap-5 my-10 max-w-7xl mx-auto">
      {
      products.map(product => <ProductCard key={product._id} product={product}/>)
    }
    </div>
  );
};

export default CategoryProducts;
