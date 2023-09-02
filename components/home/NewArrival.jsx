/** @format */

import React from "react";
import NewArrivalSlider from "../sliders/NewArrivalSlider";

const newArrival = [
  {
    name: "SAMSUNG GALAXY Z FOLD 2",
    price: 299,
    image:
      "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1692850898/samples/galaxy_zfold3_zflip35g_main_kv_xhfka0.jpg",
  },
  { name: "2021 Mens Casual Board Sneakers  ", price: 299, image: "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1692850311/samples/snekers_y84nbh.jpg" },
  {
    name: "HIGHLAND LT ZIP HOODY",
    price: 299,
    image:
      "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1692849767/samples/istockphoto-182178602-612x612_lbynhg.jpg",
  },
];

const NewArrival = () => {
  return (
    <section className="lg:flex lg:flex-col lg:items-center my-20 lg:my-10">
      <div className="text-center my-10">
        <h2 className="text-3xl text-colorBold font-semibold">New Arrival</h2>
        <p className="text-gray">
          Explore thousands of products, new and affordable daily
        </p>
      </div>
      <div className="lg:flex gap-8 hidden">
        {newArrival.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-2 border border-gray rounded-b-2xl pb-5"
          >
            <div className="w-[350px] h-[250px] bg-gray relative">
              <span className="bg-primary rounded-full p-2 absolute right-3 top-3">
                New
              </span>
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-center"
              />
            </div>
            <h4>{item.name}</h4>
            <span className="text-primary">${item.price}</span>
          </div>
        ))}
      </div>

      {/* Mobile View */}
      {/* <div className='lg:hidden mx-auto my-0 relative overflow-hidden rounded-[32px]'> */}
      <NewArrivalSlider newArrival={newArrival} />
      {/* {newArrival.map((item, index) => (
                <div key={index} className='flex flex-col items-center gap-2 border border-gray rounded-b-2xl pb-5'>
                    <div className='w-[350px] h-[250px] bg-gray relative'>
                        <span className='bg-primary rounded-full p-2 absolute right-3 top-3'>New</span>
                    </div>
                    <h4>{item.name}</h4>
                    <span className='text-primary'>${item.price}</span>
                </div>
            ))} */}
      {/* </div> */}
    </section>
  );
};

export default NewArrival;
