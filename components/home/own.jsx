/** @format */

import React from "react";
import NewArrivalSlider from "../sliders/NewArrivalSlider";
const newArrival = [

  {
    name: "Curdde-Gold Watch",
    price: 29.99,
    promoPrice: 19.99,
    image:
      "Images/62.jpg",
  },
  {name: "Shawama",
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
    "Images/47.jpg",
  },
  {
    name: "Curdde-Gold Watch",
    price: 29.99,
    promoPrice: 19.99,
    image:
    "Images/78.jpg",
  },
  {
    name: "Shawama",
    price: 29.99,
    promoPrice: 19.99,
    image:
    "Images/81.jpg",
  },
  {
    name: "Wireless Microphone",
    price: 29.99,
    promoPrice: 19.99,
    image:
    "Images/22.jpg",
  },
  {
    name: "Curdde-Gold Watch",
    price: 29.99,
    promoPrice: 19.99,
    image:
    "Images/91.jpg",
  },
  {
    name: "Shawama",
    price: 29.99,
    promoPrice: 19.99,
    image:
    "Images/81.jpg",
  },
]


const Myown = () => {
  return (
    <section className="lg:flex lg:flex-col w-full lg:justify-evenly my-20 lg:my-10">
      <div className="flex flex-row items-start ">
        <div className="lg:flex-[25%] w-full ">
          <div
            className="lg:w-[400px] h-[500px] w-full border rounded-lg"
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
                
          </div>
        </div>
      <div className="lg:flex-[75%] gap-[1] w-full flex flex-wrap overflow-hidden lg:items-start items-center ">
        {newArrival.map((item, index) => (

          <div
            key={index}
            className="flex flex-col mt-1 w-[25%] flex-wrap items-center gap-2 overflow-hidden border border-gray rounded-lg"
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

export default Myown;
