/** @format */

import React from "react";

const Collections = () => {
  return (
    <section className="my-20">
      <div className="text-center my-10">
        <h2 className="text-3xl text-colorBold font-semibold">
          Our Collections
        </h2>
        <p className="text-gray">
          A wide variety of products made easier to find. Right at your
          fingertips
        </p>
      </div>
      <div className="flex lg:flex-row flex-col justify-between gap-4">
        <div
          className="lg:w-[50%] w-full rounded-xl border border-gray"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dcb4ilgmr/image/upload/v1693024522/utilities/pexels-chan-walrus-958545_hishe3.jpg')",
            backgroundSize: "cover", // Adjust as needed
            backgroundPosition: "center", // Adjust as needed
            backgroundRepeat: "no-repeat", // Adjust as needed
          }}
        >
          <div className="mx-auto w-72 bg-[#FAFAFA] opacity-90 rounded-xl text-center my-16 p-6">
            <h2 className="text-colorBold text-lg font-bold mb-2">
              Uncover Culinary Delights Around You
            </h2>
            <p className="text-xs">Explore Nearby Restaurants with BeelyDrop</p>
          </div>
        </div>
        <div
          className="lg:w-[50%] w-full bg-gray rounded-xl border border-gray"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dcb4ilgmr/image/upload/v1693025124/utilities/black-background-with-gold-black-ornate-frames-black-background_901003-2957_vqykxi.avif')",
            backgroundSize: "cover", // Adjust as needed
            backgroundPosition: "center", // Adjust as needed
            backgroundRepeat: "no-repeat", // Adjust as needed
          }}
        >
          <div className="mx-auto w-72 bg-[#FAFAFA] opacity-80 rounded-xl text-center my-16 p-6">
            <h2 className="text-colorBold text-lg font-bold mb-2">
              Craft Your Own Unique Style
            </h2>
            <p className="text-xs">
              Personalize Your Product to Match Your Tastes and Preferences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collections;
