/** @format */

import React from "react";
import NewArrivalSlider from "../sliders/NewArrivalSlider";
const newArrival = [

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
]


const NewArrival = () => {
  return (
    <section className="lg:flex lg:flex-col lg:flex-flow w-full lg:justify-evenly my-20 lg:my-10 ">
      <div className="flex flex-row items-start gap-0">
        <div className="lg:w-[35.5%] w-full gap-5">
          <div
            className="lg:w-[500px] h-[350px] w-full border rounded-lg"
            style={{
              backgroundImage:
                "url('https://pyxis.nymag.com/v1/imgs/fc9/931/ad297e0a7b29bc84587eaf23abe9c5602e-2-1-Couch.jpg')",
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
      <div className="flex lg:w-[64.5%] gap-0 w-full flex-wrap lg:items-start items-center ">
        {newArrival.map((item, index) => (

          <div
            key={index}
            className="flex flex-col ml-2 mt-1 flex-wrap items-center gap-2 border border-gray rounded-lg"
          >
            <div className="flex flex-col">
              <div className="flex-wrap flex-col w-[220px] h-[120px] bg-gray relative ">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-center"
                  />
            </div>
            <h4 className="text-m">{item.name}</h4>
            <span className="text-primary">${item.price}</span>
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

export default NewArrival;
