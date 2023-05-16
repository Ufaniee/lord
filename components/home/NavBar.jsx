import React, { useState } from 'react';
import Link from 'next/link';
import mobileLogo from '../../public/assets/mobileLogo.svg'
import searchIcon from '../../public/assets/Search.svg'
import userIcon from '../../public/assets/User-2.svg'
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import Image from 'next/image';


const navList = [
    {name: 'Home', link: '/'},
    {name: 'About', link: '/about'},
    {name: 'Product', link: '/products'},
    {name: 'Contact', link: '/contact'}
]

const NavBar = () => {
  const [ click, setClick ] = useState(false);
	const handleClick = () => setClick(!click);

  return (
    <nav className='relative'>
      <div className='flex lg:hidden justify-between py-4'>
        <Link href='/'> <Image src={mobileLogo} alt="logo" /> </Link>
        <div className='flex items-center gap-3'>
          <Image src={searchIcon} alt="" />
          <Image src={userIcon} alt="" />
          <Image src={FaBars} alt="" />
          {click ? <FaTimes onClick={handleClick} /> : <FaBars onClick={handleClick}/>}
        </div>
      </div>
      
      {/* Mobile Navigation Bar */}
      {click && <div className='lg:hidden flex flex-col w-full absolute hrefp-20 z-20 bg-[#fff] gap-10 justify-center items-center py-4 text-lg text-colorBold transition-all ease-in-out duration-500'>
          {navList.map((nav, index) => (
              <Link href={nav.link} key={index}>{nav.name}</Link>
          ))}
      </div>}

      {/* Desktop Navigation Bar */}
      <div className='hidden lg:flex gap-12 justify-center text-lg text-colorBold my-4'>
          {navList.map((nav, index) => (
              <Link href={nav.link} key={index}>{nav.name}</Link>
          ))}
      </div>
    </nav>
  )

}

export default NavBar
