import { useRouter } from "next/router";
import React from "react";

const CategoryProducts = () => {
  const route = useRouter();
  return <div>category product page {route.query.category}</div>;
};

export default CategoryProducts;
