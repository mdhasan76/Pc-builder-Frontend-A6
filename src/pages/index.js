import RootLayout from "@/components/UI/RootLayout";
import HomePageContainer from "@/components/pageComponent/HomePageContainer";

export default function HomePage() {
  return (
    <div>
      <HomePageContainer />
    </div>
  );
}

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
