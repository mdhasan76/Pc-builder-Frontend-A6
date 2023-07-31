import RootLayout from "@/components/UI/RootLayout";
import CategoryProducts from "@/components/pageComponent/CategoryProducts";
import React from "react";

const CategoryProductPage = () => {
  return (
    <div>
      <CategoryProducts />
    </div>
  );
};

export default CategoryProductPage;

CategoryProductPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
