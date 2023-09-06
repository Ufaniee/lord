/** @format */

// import Image from 'next/image'
import React from "react";

const team = [
  {
    name: "Nwike Chisom",
    role: "Project Manager & CEO",
    img: "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1693962821/utilities/Screenshot_20230905_141351-removebg-preview_fbglif.png",
  },
  {
    name: "Nwachukwu Onyedikachi ",
    role: "Operation Manager & COO",
    img: "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1693923155/utilities/Screenshot_2023-09-05_150615-removebg-preview_izdler.png",
  },
  {
    name: "Joseph Onipe",
    role: "Graphics Designer and Branding Expert",
    img: "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1693923153/utilities/Screenshot_2023-09-05_141641-removebg-preview_cokjos.png",
  },
  {
    name: "Mdoo Tormough",
    role: "Digital Markketing Expert",
    img: "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1693923153/utilities/1692538380327-removebg-preview_im9pdj.png",
  },
];

const Team = () => {
  return (
    <section className="flex flex-col gap-10 text-center my-20">
      <div className="flex flex-col">
        <h2 className="text-2xl font-semibold text-colorBold">Our Team</h2>
        <p className="text-lg text-colorNormal">
          At BeelyDrop, we provide an innovative e-commerce experience that
          empowers users to discover, customize, and shop for products that
          resonate with their individual tastes and preferences.
        </p>
      </div>

      <div className="flex lg:flex-row flex-col justify-between gap-10">
        {team.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center pb-4 bg-[#FAFAFA] w-[100%] lg:w-[25%] rounded-2xl border border-[#FAFAFA]"
            style={{ boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)" }}
          >
            <div
              className="h-44 w-full rounded-2xl mb-4"
              style={{
                backgroundImage: `url(${item.img})`, // Replace 'item.img' with the URL of your image
                backgroundSize: "contain", // Adjust this property as needed
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center", // Adjust this property as needed
              }}
            ></div>
            <h3 className="font-medium text-lg text-colorBold">{item.name}</h3>
            <p className="text-sm text-colorNormal px-2">{item.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
