import RootLayout from "@/components/UI/RootLayout";
import React from "react";

const PcBuilderPage = () => {
  return <div>This is pc builder</div>;
};

export default PcBuilderPage;

PcBuilderPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
