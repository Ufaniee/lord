/** @format */

import React from "react";

const DownloadApp = () => {
  return (
    <section className="">
      <div className="text-center">
        <h3 className="font-bold text-lg text-colorBold my-2">
          Download Our App
        </h3>
        <p className="text-gray my-2">
          Unlock a world of limitless possibilities. Download the BeelyDrop app and embark on a journey of
          discovery and connection, 
        </p>
        <div className="flex justify-center space-x-5">
          <img
            src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1693013858/utilities/Screenshot_2023-08-26_021332-removebg-preview_2_uzlm3f.png"
            alt="Play Store"
            className="w-40"
          />
          <img
            src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1693013610/utilities/Screenshot_2023-08-26_021253-removebg-preview_1_vvxtry.png"
            alt="App Store"
            className="w-40"
          />
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
