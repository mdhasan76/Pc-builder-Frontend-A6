import React from "react";
const product = {
  _id: "abc",
  image:
    "https://www.startech.com.bd/image/cache/catalog/processor/Intel/core-i5-13600k/Core%20i5%2013600K-01-500x500.webp",
  productName: "Intel 13th Gen Core i5 13600K Raptor Lake Processor",
  category: "CPU / Processor",
  status: "In Stock",
  price: 399.99,
  description: "Unlock the true potential of your PC with CPU Processor ABC.",
  keyFeatures: {
    Brand: "ProcessorCorp",
    Model: "ABC-XYZ",
    Specification:
      "12 cores, 24 threads, 3.5GHz base clock, 4.8GHz boost clock",
    Socket: "AM4",
    TDP: "105W",
  },
  individualRating: 4.9,
  averageRating: 4.7,
  reviews: [
    {
      username: "PCBuilderPro",
      rating: 5,
      review: "One of the best CPUs I've ever used. Superb performance!",
    },
    {
      username: "TechNewbie",
      rating: 4,
      review: "Fast and efficient, but a bit pricey for my budget.",
    },
  ],
};
const ProductDetails = () => {
  return (
    <>
      <div className="flex max-w-7xl mx-auto items-center border-b border-gray-300">
        <div className="w-[50%]">
          <img src={product?.image} alt="" />
        </div>
        <div className="w-[50%] space-y-3">
          <h1 className="text-3xl font-semibold">{product?.name}</h1>
          <p className="text-xl">Rating: {product?.rating}</p>
          <button>Add to cart</button>
        </div>
      </div>
      <div>
        {product.reviews.map((review, i) => (
          <div key={i}>
            <p>name: {review.username}</p>
            <p>Rating: {review.rating}</p>
            <p>Review: {review.review}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductDetails;
