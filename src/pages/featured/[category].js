import RootLayout from "@/components/UI/RootLayout";
import CategoryProducts from "@/components/pageComponent/CategoryProducts";
import React from "react";
const CategoryProductPage = ({ products }) => {
  return (
    <div>
      <CategoryProducts products={products} />
    </div>
  );
};

export default CategoryProductPage;

CategoryProductPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export async function getStaticPaths() {
  const res = await fetch(`${process.env.SERVER_URL}/products`);
  const products = await res.json();
  const paths = products?.data?.map((product) => ({
    params: { category: product.category },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({params}) {
  const res = await fetch(
    `${process.env.SERVER_URL}/category/${params.category}`
  );
  const products = await res.json();
  return { props: { products: products } };
}
