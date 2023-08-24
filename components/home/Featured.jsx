/** @format */

import React from "react";
import Timing from "../Timing";
import FeaturedSlider from "../sliders/FeaturedSlider";

const featuredProducts = [
  {
    name: "Shawama",
    price: 29.99,
    promoPrice: 19.99,
    image:
      "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1692852297/samples/shawma_s0w8sg.jpg",
  },
  {
    name: "Wireless Microphone",
    price: 29.99,
    promoPrice: 19.99,
    image:
      "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1692852068/samples/mic_awwegv.webp",
  },
  {
    name: "Camera HD + Lens",
    price: 29.99,
    promoPrice: 19.99,
    image:
      "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1692852534/samples/202403_1653901816_bxj9ks.webp",
  },
];

const Featured = () => {
  return (
    <section className="lg:my-20 my-0">
      <div className="text-center my-10">
        <h2 className="text-3xl text-colorBold font-semibold">
          Featured Products
        </h2>
        <p className="text-gray">
          Be the first to see new products dropped daily!12:15
        </p>
      </div>
      <div className="hidden lg:grid grid-cols-2 gap-4">
        {featuredProducts.map((item, index) =>
          index === 0 ? (
            <div
              key={0}
              className="row-span-2 flex flex-col items-center justify-center gap-4 border border-gray rounded-3xl"
            >
              <div className="flex flex-col items-center gap-1">
                <h4 className="text-3xl">{item.name}</h4>
                <span>
                  <span className="line-through text-colorNormal">
                    ${item.price}
                  </span>{" "}
                  - <span className="text-primary">${item.price}</span>
                </span>
              </div>
              <div className="w-[300px] h-[200px] bg-gray">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-center"
                />
              </div>
              {/* Promo Timing */}
              <Timing hrs={2} min={18} sec={27} />
            </div>
          ) : (
            <div
              key={index + 1}
              className="flex border border-gray rounded-r-3xl"
            >
              <div className="w-[200px] h-[250px] bg-gray">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="px-10 pt-6 flex flex-col gap-2">
                <span className="bg-primary px-6 py-1 w-40 rounded-lg">
                  Limited Offer
                </span>
                <h4>{item.name}</h4>
                <span>
                  <span className="line-through text-colorNormal">
                    ${item.price}
                  </span>{" "}
                  - <span className="text-primary">${item.price}</span>
                </span>
                {/* Promo Timing */}
                <Timing hrs={2} min={18} sec={27} />
              </div>
            </div>
          )
        )}
      </div>
      <FeaturedSlider featuredProducts={featuredProducts} />
    </section>
  );
};

export default Featured;
