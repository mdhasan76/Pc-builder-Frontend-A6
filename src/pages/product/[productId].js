import RootLayout from "@/components/UI/RootLayout";

const ProductDetailsPage = () => {
  return (
    <div>
      {/* <ProductDetailsPage /> */}
      details page
    </div>
  );
};

export default ProductDetailsPage;

ProductDetailsPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
