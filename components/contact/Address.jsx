/** @format */

import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

const Address = () => {

    
const instagramUrl = 'https://instagram.com/beelydrop?igshid=MzNlNGNkZWQ4Mg==';
const twitterUrl = 'https://twitter.com/BeelyDrop?s=09';
const facebookUrl = 'https://www.facebook.com/profile.php?id=100093177590061&mibextid=ZbWKwL';

  return (
    <div className="flex flex-col gap-4 w-full lg:w-2/5 bg-primary p-8 rounded-[32px]">
      <h2 className="font-semibold text-2xl">Contact</h2>
      <div className="flex gap-4 items-center">
        <FaMapMarkerAlt />
        <p className="w-[70%]">17, Raphel St. Ojo, Lagos, Nigeria</p>
      </div>
      <div className="flex gap-4 items-center">
        <FaPhoneAlt />
        <p>+234-8140563-810</p>
      </div>
      <div className="flex gap-4 items-center">
        <FaRegEnvelope />
        <p>contact@beelydrop.com</p>
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
