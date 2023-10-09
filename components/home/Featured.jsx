/** @format */

import React from "react";
import Timing from "../Timing";
import FeaturedSlider from "../sliders/FeaturedSlider";

const featuredProducts = [
  
  
  {
    name: "Wireless Microphone",
    price: 29.99,
    promoPrice: 19.99,
    image:
      "Images/62.jpg",
  },{
    name: "Wireless Microphone",
    price: 29.99,
    promoPrice: 19.99,
    image:
      "Images/71.jpg",
  },
  {
    name: "Wireless Microphone",
    price: 29.99,
    promoPrice: 19.99,
    image:
      "Images/78.jpg",
  },{
    name: "Wireless Microphone",
    price: 29.99,
    promoPrice: 19.99,
    image:
      "Images/81.jpg",
  },
];

const Featured = () => {
  return (
    <section className="lg:flex lg:flex-col w-full lg:justify-evenly my-20 lg:my-10">
      <div className="flex flex-row items-start ">
        <div className="lg:flex-[25%] w-full ">
          <div
            className="lg:w-[400px] h-[250px] w-full border rounded-lg"
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
            <div className="text-centre text-m ">
              {/* Promo Timing */}
              <Timing days={4} hrs={2} min={18} sec={27} />
            </div>
                
          </div>
        </div>
      <div className="lg:flex-[75%] gap-[1] w-full flex flex-wrap overflow-hidden lg:items-start items-center ">
        {featuredProducts.map((item, index) => (

          <div
            key={index}
            className="flex flex-col mt-1 w-[25%] flex-wrap items-center gap-2 overflow-hidden rounded-lg"
          >
            <div className="flex flex-col">
              <div className="flex-wrap flex-col w-[205px] h-[200px] ">
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
