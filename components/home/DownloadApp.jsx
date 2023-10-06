/** @format */

import React from "react";
import Image from "next/image";
import logo from '../../public/assets/human.png';

const DownloadApp = () => {
  return (
    
      <section className=" bg-[#efeff9] rounded-[32px] w-full ">
      <div className="flex text-lg gap-8 ml-5 pl-20 w-full leading-10">
        <div className="list">
          <p><section className="mx-auto bg-primary rounded-lg">Automobiles </section></p>
          <p className="./">Clothes and Wears</p>
          <p className="./">Home Interiors</p>
          <p className="./">Computer and Tech</p>
          <p className="./">Tools & Equipment</p>
          <p className="./">Sport and Outdoor</p>
          <p className="./">Animals and Pets</p>
          <p className="./">Machinery Tools</p>
          <p className="./">More Tools</p>
        </div>

      <div className="flex gap-8 pl-20 ">
        <div className="flex lg:flex-row flex-col justify-between ">
        <div
          className="lg:w-[600px] h-[100%] w-full rounded-xl border border-gray"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dcb4ilgmr/image/upload/v1693024522/utilities/pexels-chan-walrus-958545_hishe3.jpg')",
            backgroundSize: "cover", // Adjust as needed
            backgroundPosition: "center", // Adjust as needed
            backgroundRepeat: "no-repeat", // Adjust as needed
          }}
        >
          <div className="w-40 bg-[#FAFAFA] opacity-90 rounded-xl text-center p-2 mt-2">
            <h2 className="text-colorBold text-lg font-bold mt-2">
              Learn More
            </h2>
          </div>
        </div>
        </div>
      </div>
        
      <div className="lg:flex lg:flex-col pl-20 leading-10 mr-10">
            <div className=" flex flex-col bg-colorBold rounded-lg">
                  <div className="flex felx-col">
                    <div className=" ">
                      <Image src={logo} width={80} height={80}/></div>
                    <div className="text-lg"> Hi User, Lets get started</div>
                  </div>
                  <div className="flex mx-2 my-2 flex-col text-lg leading-10">
                  <div className='bg-[#bebef1] mx-4 my-2 w-15 w-100 rounded-lg cursor-pointer text-[#fff] text-center'>Join Now</div>
                  <div className='bg-[#ffffff] mx-4 my-2 w-15 w-100 rounded-lg cursor-pointer text-[#423fae] text-center'>Login</div>
                  </div>
            </div>
            <div className="bg-[#9f3535]  my-2 flex text-[#fff] text-lg leading-10 py-4 rounded-lg">
              Get Usd $10 off wih a new supplier
            </div>
            <div className="bg-[#242486] my-2 flex text-[#fff] text-lg leading-10 py-4 rounded-lg">
              Send quotes with supplier preferences
            </div>
            
      </div>
      </div>
    </section>

    
  );
};

export default DownloadApp;
