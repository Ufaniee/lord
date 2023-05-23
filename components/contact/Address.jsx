import React from 'react'
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

const Address = () => {
  return (
    <div className='flex flex-col gap-4 w-full lg:w-2/5 bg-primary p-8 rounded-[32px]'>
        <h2 className='font-semibold text-2xl'>Contact</h2>
        <div className='flex gap-4 items-center'>
            <FaMapMarkerAlt/>
            <p className='w-[70%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. </p>
        </div>
        <div className='flex gap-4 items-center'>
            <FaPhoneAlt/>
            <p>+1234567890</p>
        </div>
        <div className='flex gap-4 items-center'>
            <FaRegEnvelope/>
            <p>lovia@support.com</p>
        </div>
        <div className='flex flex-col gap-2 mt-6'>
            <h3>Follow Us</h3>
            <div className='flex gap-4'>
                <FaInstagram/>
                <FaTwitter/>
                <FaFacebookSquare/>
            </div>
        </div>
    </div>
  )
}

export default Address