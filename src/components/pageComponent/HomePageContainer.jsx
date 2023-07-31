import React from "react";
import ProductCard from "../UI/ProductCard";

// genarate random number from 0-18
const genarateRendomNumber = () => Math.floor(Math.random(1) * 18);

const HomePageContainer = () => {
  const randomIndex = new Set();
  while (randomIndex.size < 6) {
    const newIndex = genarateRendomNumber();
    randomIndex.add(newIndex);
  }
  const resultArray = Array.from(randomIndex);

  console.log(resultArray, "new array");
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
