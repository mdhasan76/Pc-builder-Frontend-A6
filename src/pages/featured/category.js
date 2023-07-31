import ProductCard from "@/components/UI/ProductCard";
import RootLayout from "@/components/UI/RootLayout";
import React from "react";

const FeaturedCategory = ({products}) => {
  // console.log(products, "products category")
  const processor = products.filter(product => product.category === 'Processor');
  const powerSupply = products.filter(product => product.category === 'Power Supply');
  const ssd = products.filter(product => product.category === 'SSD');
  const monitor = products.filter(product => product.category === 'Monitor');
  const motherboard = products.filter(product => product.category === 'Motherboard');
  const ram = products.filter(product => product.category === 'RAM');
  return (
    <div className="max-w-7xl mx-auto my-10">
      <div className="mb-7">
        <p className="text-xl font-bold border-b-4 border-black mb-2 inline-block pr-3">
          CPU / Processor
        </p>
        <div className="grid grid-cols-3 gap-5">
          {
            processor?.map(product => <ProductCard key={product._id} product={product}/>)
          }
        </div>
      </div>
      <div>
        <p className="text-xl font-bold border-b-4 border-black mb-2 inline-block pr-3">
          Motherboard
        </p>
        <div className="grid grid-cols-3 gap-5">
          {
            motherboard?.map(product => <ProductCard key={product._id} product={product}/>)
          }
        </div>
      </div>
      <div>
        <p className="text-xl font-bold border-b-4 border-black mb-2 inline-block pr-3">
          Storage Device
        </p>
        <div className="grid grid-cols-3 gap-5">
          {
            ssd?.map(product => <ProductCard key={product._id} product={product}/>)
          }
        </div>
      </div>
      <div>
        <p className="text-xl font-bold border-b-4 border-black mb-2 inline-block pr-3">
          Monitor
        </p>
        <div className="grid grid-cols-3 gap-5">
          {
            monitor?.map(product => <ProductCard key={product._id} product={product}/>)
          }
        </div>
      </div>
      <div>
        <p className="text-xl font-bold border-b-4 border-black mb-2 inline-block pr-3">
          RAM
        </p>
        <div className="grid grid-cols-3 gap-5">
          {
            ram?.map(product => <ProductCard key={product._id} product={product}/>)
          }
        </div>
      </div>
      <div>
        <p className="text-xl font-bold border-b-4 border-black mb-2 inline-block pr-3">
          Power Supply Unit
        </p>
        <div className="grid grid-cols-3 gap-5">
          {
            powerSupply?.map(product => <ProductCard key={product._id} product={product}/>)
          }
        </div>
      </div>
    </div>
  );
};

export default FeaturedCategory;
FeaturedCategory.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export async function getStaticProps() {
  const res = await fetch(
    `${process.env.SERVER_URL}/allproducts`
  );
  const products = await res.json();
  return { props: { products: products.data } };
}