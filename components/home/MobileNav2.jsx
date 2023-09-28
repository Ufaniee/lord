/** @format */

import React, { useState } from "react";
import Link from "next/link";
import mobileLogo from "../../public/assets/mobileLogo.svg";
import searchIcon from "../../public/assets/icons/search.svg";
import userIcon from "../../public/assets/icons/user-2.svg";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import Image from "next/image";
import notificationIcon from "../../public/assets/bell.png";

const navList = [
  { name: "Home", link: "/" },
  { name: "Contact Us", link: "/contact" },
];

const MobileNav = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <nav className="relative">
      <div className="flex lg:hidden justify-between py-4">
        <Link href="/">
          {" "}
          <Image src={mobileLogo} alt="logo" />{" "}
        </Link>
        <div className="flex items-center gap-3">
          <Image src={searchIcon} alt="" />
          <Link href="/cart" className="relative">
            <Image
              src={notificationIcon}
              alt="Shopping back"
              height={24}
              width={24}
            />
            <span className="absolute bg-red text-xs text-white rounded-full p-1 -top-3 left-3">
              9
            </span>
          </Link>
          {/* <Image src={FaBars} alt="" />
          {click ? <FaTimes onClick={handleClick} /> : <FaBars onClick={handleClick}/>} */}
        </div>
      </div>

      {/* Mobile Navigation Bar */}
      {/* {click && <div className='lg:hidden flex flex-col w-full absolute p-20 z-20 bg-[#fff] gap-10 justify-center items-center py-4 text-lg text-colorBold transition-all ease-in-out duration-500'>
          {navList.map((nav, index) => (
              <Link href={nav.link} key={index}>{nav.name}</Link>
          ))}
      </div>} */}
    </nav>
  );
};

export default MobileNav;
