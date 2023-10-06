/** @format */

import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

const Address = () => {

    
const instagramUrl = 'https://instagram.com/ufaniee';
const twitterUrl = 'https://twitter.com/ufaniee';
const facebookUrl = 'https://www.facebook.com/ufaniee';

  return (
    <div className="flex flex-col gap-4 w-full lg:w-2/5 bg-primary p-8 rounded-[32px]">
      <h2 className="font-semibold text-2xl">Contact</h2>
      <div className="flex gap-4 items-center">
        <FaMapMarkerAlt />
        <p className="w-[70%]">Lugbe,Abuja</p>
      </div>
      <div className="flex gap-4 items-center">
        <FaPhoneAlt />
        <p>+234-803270-1991</p>
      </div>
      <div className="flex gap-4 items-center">
        <FaRegEnvelope />
        <p>anie.ufan@gmail.com</p>
      </div>
      <div className="flex flex-col gap-2 mt-6">
        <h3>Follow Us</h3>
        <div className="flex gap-4">
          <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href={twitterUrl} target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href={facebookUrl} target="_blank" rel="noopener noreferrer">
            <FaFacebookSquare />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Address;
