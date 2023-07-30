import RootLayout from "@/components/UI/RootLayout";
import React from "react";

const AboutPage = () => {
  return <div className="h-screen">this is about page</div>;
};

export default AboutPage;

AboutPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
