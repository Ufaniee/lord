/** @format */

import React from "react";

const flashSaleProducts = [
  {
    name: "Diamond Men Suit Set",
    price: 290.99,
    promoPrice: 150.99,
    available: 10,
    sold: 5,
    image:
      "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1693095130/utilities/1_sjeqfr.jpg",
  },
  {
    name: "Air Purifier",
    price: 29.99,
    promoPrice: 19.99,
    available: 15,
    sold: 11,
    image:
      "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1693094289/utilities/best-shark-air-purifier-deal-e1688504865539_o3ls4a.webp",
  },
  {
    name: "Bluetooth Printer",
    price: 29.99,
    promoPrice: 19.99,
    available: 5,
    sold: 2,
    image:
      "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1693094488/utilities/Best-Bluetooth-Printer-For-Home-Use-Android-IPhone-Compatible_jzpnja.webp",
  },
  {
    name: "Diamond Men Suit Set",
    price: 290.99,
    promoPrice: 150.99,
    available: 10,
    sold: 5,
    image:
      "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1693095130/utilities/1_sjeqfr.jpg",
  },
  {
    name: "Air Purifier",
    price: 29.99,
    promoPrice: 19.99,
    available: 15,
    sold: 11,
    image:
      "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1693094289/utilities/best-shark-air-purifier-deal-e1688504865539_o3ls4a.webp",
  },
  {
    name: "Bluetooth Printer",
    price: 29.99,
    promoPrice: 19.99,
    available: 5,
    sold: 2,
    image:
      "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1693094488/utilities/Best-Bluetooth-Printer-For-Home-Use-Android-IPhone-Compatible_jzpnja.webp",
  },
  {
    name: "Diamond Men Suit Set",
    price: 290.99,
    promoPrice: 150.99,
    available: 10,
    sold: 5,
    image:
      "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1693095130/utilities/1_sjeqfr.jpg",
  },
  {
    name: "Air Purifier",
    price: 29.99,
    promoPrice: 19.99,
    available: 15,
    sold: 11,
    image:
      "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1693094289/utilities/best-shark-air-purifier-deal-e1688504865539_o3ls4a.webp",
  },
  {
    name: "Bluetooth Printer",
    price: 29.99,
    promoPrice: 19.99,
    available: 5,
    sold: 2,
    image:
      "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1693094488/utilities/Best-Bluetooth-Printer-For-Home-Use-Android-IPhone-Compatible_jzpnja.webp",
  },
  {
    name: "Diamond Men Suit Set",
    price: 290.99,
    promoPrice: 150.99,
    available: 10,
    sold: 5,
    image:
      "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1693095130/utilities/1_sjeqfr.jpg",
  },
  {
    name: "Air Purifier",
    price: 29.99,
    promoPrice: 19.99,
    available: 15,
    sold: 11,
    image:
      "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1693094289/utilities/best-shark-air-purifier-deal-e1688504865539_o3ls4a.webp",
  },
  {
    name: "Bluetooth Printer",
    price: 29.99,
    promoPrice: 19.99,
    available: 5,
    sold: 2,
    image:
      "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1693094488/utilities/Best-Bluetooth-Printer-For-Home-Use-Android-IPhone-Compatible_jzpnja.webp",
  },
];

const FlashSale = () => {
  return (
    <section className="flex flex-wrap w-full  lg:justify-evenly my-20 lg:my-10">
      <div className="flex  gap-[1] w-full  flex-wrap lg:items-start items-center ">
        {flashSaleProducts.map((item, index) => (

          <div
            key={index}
            className="flex flex-col pl-2 ml-1 flex-wrap rounded-lg items-center border border-gray"
          >
            <div className="flex flex-col">
              <div className="lg:flex-wrap lg:flex-col w-[225px] h-[200px] bg-gray ">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-center"
                  />
            </div>
                      <h4 className="text-m">{item.name}</h4>
                      <span>
                        <span className=" text-colorNormal">
                          ${item.price}
                        </span>{" "}
                        - <span className="text-primary">${item.price}</span>
                      </span>
                    </div>
              </div>
          ))}
          </div>
    </section>
  );
};

export default FlashSale;
