import Link from 'next/link'
import React from 'react'
import { FaAngleDown } from "react-icons/fa";


const categories = [
    {name: 'Computer & Laptop', available: 25},
    {name: 'Mobile & Tablet', available: 125},
    {name: 'Camera', available: 150},
    {name: 'TV & Smart Box', available: 75},
    {name: 'Home Appliance', available: 75},
    {name: 'Smart Watch', available: 45},
    {name: 'Microphone & Audio', available: 55},
    {name: 'Gaming', available: 40},
    {name: 'Printer', available: 14},
    {name: 'Accessories', available: 32},
    {name: 'More Categories', available: 10},
]

const Sidebar = () => {
  return (
    <div className='w-[23%] flex flex-col gap-4 p-6 border border-[#A7A7A7] rounded-2xl'>
        <h2 className='font-bold'>All Categories</h2>

        {/* Listing Categories */}
        <div className='flex flex-col gap-2 h-56 overflow-y-scroll'>
            {categories.map((item, index) => (
                <Link href='' key={index} className='text-colorBold text-sm'>{item.name} <span className='text-colorNormal'>({item.available})</span></Link>
            ))}
        </div>

        {/* horizontal line break */}
        <hr className='border-b border-[#D0D0D2]'/>

        {/* Filter by Price */}
        <div>
            <div className='flex justify-between items-center'>
                <h3>Filter by Price</h3>
                <FaAngleDown className='text-colorBold'/>
            </div>
            <div className='flex flex-col mt-8 gap-4'>
                <input type="range" className='h-[6px]'/>
                <span className='text-colorNormal'>Price: <span className='font-bold text-colorBold'>$100 - $250</span></span>
            </div>
        </div>

        {/* horizontal line break */}
        <hr className='border-b border-[#D0D0D2]'/>

        <div>
            <div className='flex justify-between items-center'>
                <h3>Filter by Location</h3>
                <FaAngleDown className='text-colorBold'/>
            </div>
            <form className='mt-4 text-colorNormal'>
                <div className='flex flex-row gap-4'>
                    <input type="checkbox" className=''/>
                    <span>Jakarta</span> 
                </div>
                <div className='flex flex-row gap-4'>
                    <input type="checkbox" className=''/>
                    <span>Yogyakarta</span> 
                </div>
                <div className='flex flex-row gap-4'>
                    <input type="checkbox" className=''/>
                    <span>Bandung</span> 
                </div>
                <div className='flex flex-row gap-4'>
                    <input type="checkbox" className=''/>
                    <span>Surabaya</span> 
                </div>
            </form>
            
        </div>

    </div>
  )
}

export default Sidebar