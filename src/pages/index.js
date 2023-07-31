import RootLayout from "@/components/UI/RootLayout";
import HomePageContainer from "@/components/pageComponent/HomePageContainer";
console.log(process.env.SERVER_URL, "server");
export default function HomePage({ products }) {
  return (
    <div>
      <HomePageContainer products={products} />
    </div>
  );
}

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export async function getStaticProps() {
  const res = await fetch(`${process.env.SERVER_URL}/products`);
  const products = await res.json();
  return { props: { products: products.data }, revalidate: 10 };
}
