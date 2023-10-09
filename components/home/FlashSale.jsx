/** @format */

import React from "react";

const flashSale = [
   { id:"1", name: "Smartphone Camera", description:"",price: 1000.00, star: 5.0,sold: 99, img:'/Images/1.jpg' },
   { id:"2", name: "Smartphone TV", price: 1000.00, star: 5.0, sold: 99, img:'/Images/2.jpg' },
   { id:"5", name: "Smartphone TV", price: 1000.00, star: 5.0, sold: 99, img:'/Images/3.jpg' },
   { id:"3", name: "Smartphone 5G", price: 1000.00, star: 5.0, sold: 99, img:'/Images/4.jpg' },
   { id:"6", name: "Smartphone Con", price: 1000.00,star: 5.0, sold: 99, img:'/Images/5.jpg' },
   { id:"7", name: "Smartphone Con",  price: 1000.00, star: 5.0, sold: 99, img:'/Images/1.jpg' },
   { id:"8", name: "Smartphone Camera", description:"",price: 1000.00, star: 5.0,sold: 99, img:'/Images/6.jpg' },
   { id:"12", name: "Smartphone Con", price: 1000.00,star: 5.0, sold: 99, img:'/Images/7.jpg' },
   { id:"8", name: "Smartphone Camera", description:"",price: 1000.00, star: 5.0,sold: 99, img:'/Images/1.jpg' },
   { id:"6", name: "Smartphone Con", price: 1000.00,star: 5.0, sold: 99, img:'/Images/5.jpg' },
   { id:"2", name: "Smartphone TV", price: 1000.00, star: 5.0, sold: 99, img:'/Images/2.jpg' },
   { id:"5", name: "Smartphone TV", price: 1000.00, star: 5.0, sold: 99, img:'/Images/3.jpg' },
 ]


const FlashSale = () => {
  return (
    <section className="flex w-[full] flex-wrap lg:items-start items-center ">
        {flashSale.map((item, index) => (

          <div
            key={index}
            className="flex flex-col mt-1 flex-wrap items-center border border-gray rounded-lg"
          >
            <div className="flex flex-col">
              <div className="flex-wrap flex-col w-[215px] h-[200px] ">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-[200px] h-[full] object-center"
                  />
            </div>
                      <h4 className="text-m text-center font-bold">{item.name}</h4>
                      <div className="text-center">
                        <span className=" text-m font-bold text-red">${item.price}</span>
                      </div>
                    </div>
              </div>
          ))}
 
      </section>
         
  );
};

export default FlashSale;
