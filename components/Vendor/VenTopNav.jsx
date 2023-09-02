/** @format */

// components/TopNavBar.js
import React from "react";
import Link from "next/link";
import Asearchicon from "../../public/assets/icons/Asearchicon.svg";
import Alocation from "../../public/assets/icons/Alocation.svg";
import AUserIcon from "../../public/assets/icons/AUserIcon.svg";
import Image from "next/image";


const TopNavBar = () => {
  return (
    <div>
      <nav className="bg-white text-white">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="">
            <div className="flex items-center">
              <p className="text-xl font-bold">Dashboard</p>
            </div>
          </Link>
          <ul className="hidden md:flex space-x-4">
            <li>
              <Link href="">
              <div className="flex items-center">
              <Image src={Alocation} alt="Four Dots icon" />
              <p className="text-gray pl-2">Los Angeles, CA</p>

              </div>
              </Link>
            </li>

            <li>
              <Link href="">
              <div className="flex items-center pl-8">
              <Image src={AUserIcon} alt="Four Dots icon" />
                <p className="text-gray pl-2">Dillon Smith</p>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default TopNavBar;
