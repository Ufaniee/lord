/** @format */

import React from "react";
import Button from "../global/Button";

const Collections = () => {
  return (
    <section className="my-20">
    <div className="bg-hero-image  bg-cover bg-center h-[400px] flex items-center justify-evenly">
                <div className='w-full lg:w-[440px] flex flex-col gap-2 text-white'>
                  <h2 className='font-bold'>An easy way to send money to Suppliers</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                </div>
              <div className='text-white mt-10 lg:mt-0 lg:pl-14 w-full lg:w-1/2'>
                <div className='w-full lg:w-[440px] flex flex-col gap-2'>
                    <h3 className='font-bold'>Send Quote to Suppliers</h3>
                  </div>
                <form>
                    <div>
                        <input type="text" placeholder="What item do you need?" required className='rounded-lg w-full h-11 px-3 py-2 border border-colorNormal focus:outline-none' />
                    </div>
                    <div>
                        <textarea name="review" id="" cols="30" rows="5" placeholder="Type More details" required className='rounded-lg w-full px-3 py-2 border border-colorNormal focus:outline-none'></textarea>
                    </div>

                    <div className="flex justify-evenly text-[#070707]">
                    <div className="quantity">
                      <Button type='submit' buttonText='Quantity' className='bg-white w-32 text-sm font-semibold' />
                    </div>

                    <div className="quant">
                      <Button type='submit' buttonText='Pcs' className='bg-white w-32 text-sm font-semibold' />
                    </div>
                  </div>


                  <Button type='submit' buttonText='Submit' className='bg-red w-32 text-sm font-semibold' />
                  

                </form>

          </div>
    </div>
    </section>
  )
};

export default Collections;
