import RootLayout from "@/components/UI/RootLayout";
import Image from "next/image";
// const product = {
//   _id: "abc",
//   image:
//     "https://www.startech.com.bd/image/cache/catalog/processor/Intel/core-i5-13600k/Core%20i5%2013600K-01-500x500.webp",
//   productName: "Intel 13th Gen Core i5 13600K Raptor Lake Processor",
//   category: "CPU / Processor",
//   status: "In Stock",
//   price: 399.99,
//   description: "Unlock the true potential of your PC with CPU Processor ABC.",
//   keyFeatures: {
//     Brand: "ProcessorCorp",
//     Model: "ABC-XYZ",
//     Specification:
//       "12 cores, 24 threads, 3.5GHz base clock, 4.8GHz boost clock",
//     Socket: "AM4",
//     TDP: "105W",
//   },
//   individualRating: 4.9,
//   averageRating: 4.7,
//   reviews: [
//     {
//       username: "PCBuilderPro",
//       rating: 5,
//       review: "One of the best CPUs I've ever used. Superb performance!",
//     },
//     {
//       username: "TechNewbie",
//       rating: 4,
//       review: "Fast and efficient, but a bit pricey for my budget.",
//     },
//   ],
// };
const ProductDetailsPage = ({ product }) => {
  if (!product) {
    return <p className="text-lg mt-10 text-center">Loading....</p>;
  }
  return (
    <>
      <div className="flex max-w-7xl mx-auto items-center border-b border-gray-300">
        <div>
          <Image
            width={500}
            height={500}
            src={product?.image}
            alt="product img"
          />
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">{product?.productName}</h3>
          <p>Category: {product?.category}</p>
          <p>Status: {product?.status}</p>
          <p>Price: {product?.price}</p>
          <p>Description: {product?.description}</p>
          <p>Individual Rating: {product?.individualRating}</p>
          <p>AverageRating Rating: {product?.averageRating}</p>
          <hr className="my-3" />
          <div>
            <p className="text-lg font-semibold pb-3">Review</p>
            {product.reviews.map((review, i) => (
              <div key={i} className="p-3 shadow-md rounded-md">
                <p>Name: {review.username}</p>
                <p>Rating: {review.rating}</p>
                <p>Review: {review.review}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailsPage;
ProductDetailsPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export async function getStaticPaths() {
  const res = await fetch(`${process.env.SERVER_URL}/products`);
  const products = await res.json();
  const paths = products?.data?.map((product) => ({
    params: { productId: product._id },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `${process.env.SERVER_URL}/product/${params.productId}`
  );
  const product = await res.json();
  return { props: { product } };
}
