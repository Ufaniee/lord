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
    name: "Curdde-Gold Watch",
    price: 29.99,
    promoPrice: 19.99,
    image:
      "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1692852534/samples/202403_1653901816_bxj9ks.webp",
  },
  {name: "Shawama",
    price: 29.99,
    promoPrice: 19.99,
    image:
      "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1692852297/samples/shawma_s0w8sg.jpg",
  },
];

const Featured = () => {
  return (
    <section className="lg:flex lg:flex-col w-full lg:justify-evenly my-20 lg:my-10">
      <div className="flex flex-row items-start gap-0">
        <div className="lg:w-[30%] w-full gap-0">
          <div
            className="lg:w-[500px] h-[350px] w-full border rounded-lg"
            style={{
              backgroundImage:
                "url('https://res.cloudinary.com/dcb4ilgmr/image/upload/v1693025124/utilities/black-background-with-gold-black-ornate-frames-black-background_901003-2957_vqykxi.avif')",
              backgroundSize: "cover", // Adjust as needed
              backgroundPosition: "center", // Adjust as needed
              backgroundRepeat: "no-repeat", // Adjust as needed
            }}
          >
            <div className="mx-auto w-40 bg-[#FAFAFA] opacity-90 rounded-xl text-center my-16 p-6">
              <h2 className="text-colorBold text-lg font-bold mb-2">
                Source Now
              </h2>
            </div>
            <div className="text-centre text-m ml-10 p-10">
              {/* Promo Timing */}
              <Timing days={4} hrs={2} min={18} sec={27} />
            </div>
                
          </div>
        </div>
      <div className="flex lg:w-[70%] gap-[1] w-full flex-wrap ml-10 pl-10 lg:items-start items-center ">
        {featuredProducts.map((item, index) => (

          <div
            key={index}
            className="flex flex-col mt-1 flex-wrap items-center gap-2 border border-gray rounded-lg"
          >
            <div className="flex flex-col">
              <div className="flex-wrap flex-col w-[227px] h-[300px] ">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-[100%] h-[90%] object-center"
                  />
            </div>
                      <h4 className="text-m text-center font-bold">{item.name}</h4>
                      <div className="text-center">
                        <span className=" text-m font-bold text-red">${item.price}</span>
                      </div>
                    </div>
              </div>
          ))}
          </div>
      </div>
      <FeaturedSlider featuredProducts={featuredProducts} />
    </section>
  );
};


export default Featured;
