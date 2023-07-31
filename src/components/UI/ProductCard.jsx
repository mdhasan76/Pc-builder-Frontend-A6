import Image from "next/image";
import Link from "next/link";

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

const ProductCard = () => {
  return (
    <div className="rounded-2xl flex flex-col items-start justify-between p-5 overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl hover:scale-[102%] transition-all gap-2">
      <Link href={`/product/${product._id}`} className="w-full">
        <Image
          src={product?.image}
          height={300}
          width={300}
          className="h-[300px] mx-auto"
          alt="product"
        />
        <h1 className="text-xl font-semibold">{product.productName}</h1>
      </Link>
      <p>Rating: {product.averageRating}</p>
      <p className="text-sm">Category: {product.category}</p>
      <p className="text-sm">Price: {product?.price}</p>
      <p className="text-sm">Status: {product?.status}</p>
      <Link href={`/product/${product._id}`} className="btn btn-neutral">
        Show more
      </Link>
    </div>
  );
};

export default ProductCard;
