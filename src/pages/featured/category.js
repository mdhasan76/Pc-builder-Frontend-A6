import RootLayout from "@/components/UI/RootLayout";
import React from "react";

const FeaturedCategory = () => {
  return (
    <div>
      <div>
        <p className="text-xl font-bold border-b-4 border-black mb-2 inline-block pr-3">
          CPU / Processor
        </p>
      </div>
      <div>
        <p className="text-xl font-bold border-b-4 border-black mb-2 inline-block pr-3">
          Motherboard
        </p>
      </div>
      <div>
        <p className="text-xl font-bold border-b-4 border-black mb-2 inline-block pr-3">
          Storage Device
        </p>
      </div>
      <div>
        <p className="text-xl font-bold border-b-4 border-black mb-2 inline-block pr-3">
          Monitor
        </p>
      </div>
      <div>
        <p className="text-xl font-bold border-b-4 border-black mb-2 inline-block pr-3">
          RAM
        </p>
      </div>
      <div>
        <p className="text-xl font-bold border-b-4 border-black mb-2 inline-block pr-3">
          Power Supply Unit
        </p>
      </div>
    </div>
  );
};

export default FeaturedCategory;
FeaturedCategory.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
