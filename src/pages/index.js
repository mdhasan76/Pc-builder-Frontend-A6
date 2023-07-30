import RootLayout from "@/components/UI/RootLayout";

export default function HomePage() {
  return <div>home page</div>;
}

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
