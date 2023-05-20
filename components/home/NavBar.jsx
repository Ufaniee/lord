import React from 'react';
import Link from 'next/link';


const navList = [
    {name: 'Home', link: '/'},
    {name: 'About', link: '/about'},
    {name: 'Product', link: '/products'},
    {name: 'Contact', link: '/contact'}
]

const NavBar = () => {

  return (
      <nav className={`hidden lg:flex gap-7 justify-center text-lg text-colorBold my-4`}>
          {navList.map((nav, index) => (
              <Link href={nav.link} key={index}>{nav.name}</Link>
          ))}
      </nav>
  )

}

export default NavBar
