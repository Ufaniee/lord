import Link from 'next/link'
import React from 'react'
import { FaAngleDown } from "react-icons/fa";
import { MdStarRate } from "react-icons/md";
import Button from '../global/Button';


const categories = [
    {name: 'Food', available: 25},
    {name: 'Groceries', available: 125},
    {name: 'Fashion & Clothing', available: 150},
    {name: 'Health Products', available: 75},
    {name: 'Beauty Products', available: 75},
    {name: 'Electronics & Devices', available: 45},
    {name: 'Baby Products', available: 55},
    {name: 'Sporting Goods', available: 40},
    {name: 'Flawers', available: 14},
    {name: 'Cakes', available: 32},
    {name: 'Customisable Products', available: 10},
]


const Sidebar = () => {


  return (
    <div className='w-[23%] hidden lg:flex flex-col gap-4 p-6 border border-[#A7A7A7] rounded-2xl'>
        <h2 className='font-bold'>All Categories</h2>

        {/* Listing Categories */}
        <div className='border-b border-[#D0D0D2] pb-5'>
            <div className='flex flex-col gap-2 h-56 overflow-y-scroll'>
                {categories.map((item, index) => (
                    <Link href='' key={index} className='text-colorBold text-sm'>{item.name} <span className='text-colorNormal'>({item.available})</span></Link>
                ))}
            </div>
        </div>

        {/* Filter by Price */}
        <div className='border-b border-[#D0D0D2] pb-4'>
            <div className='flex justify-between items-center'>
                <h3>Filter by Price</h3>
                <FaAngleDown className='text-colorBold'/>
            </div>
            <div className='flex flex-col mt-8 gap-4'>
                <input type="range" className='h-[6px] accent-primary'/>
                <span className='text-colorNormal'>Price: <span className='font-bold text-colorBold'>$100 - $250</span></span>
            </div>
        </div>
        
        {/* Filter by Location */}
        {/* <div className='border-b border-[#D0D0D2] pb-4'>
            <div className='flex justify-between items-center'>
                <h3>Filter by Location</h3>
                <FaAngleDown className='text-colorBold'/>
            </div>
            <form className='mt-4 text-colorNormal'>
                <div className='flex flex-row gap-4'>
                    <input type="checkbox" className='accent-primary'/>
                    <span>Jakarta</span> 
                </div>
                <div className='flex flex-row gap-4'>
                    <input type="checkbox" className='accent-primary'/>
                    <span>Yogyakarta</span> 
                </div>
                <div className='flex flex-row gap-4'>
                    <input type="checkbox" className='accent-primary'/>
                    <span>Bandung</span> 
                </div>
                <div className='flex flex-row gap-4'>
                    <input type="checkbox" className='accent-primary'/>
                    <span>Surabaya</span> 
                </div>
            </form>
            z
        </div> */}

        {/* Filter by Rating */}
        <div className='border-b border-[#D0D0D2] pb-4'>
            <div className='flex justify-between items-center'>
                <h3>Filter by Rating</h3>
                <FaAngleDown className='text-colorBold'/>
            </div>
            <form className='mt-4 text-colorNormal'>
                {Array.from({length: 5}).map((item, i) => (
                    <div key={i} className='flex flex-row items-center text-lg gap-1'>
                        <input type="checkbox" className='accent-primary'/>
                        {Array.from({length: i + 1}).map((item, j) => ( <MdStarRate key={j} className='text-primary'/> ))}
                    </div>
                ))}
            </form> 
        </div>

        {/* Filter by Brand */}
        <div className='border-b border-[#D0D0D2] pb-4'>
            <div className='flex justify-between items-center'>
                <h3>Filter by Brand</h3>
                <FaAngleDown className='text-colorBold'/>
            </div>
        </div>

        {/* Filter by Promotion */}
        <div className='border-b border-[#D0D0D2] pb-4'>
            <div className='flex justify-between items-center'>
                <h3>Filter by Promotion</h3>
                <FaAngleDown className='text-colorBold'/>
            </div>
        </div>

        {/* Filter by Payment */}
        <div className='border-b border-[#D0D0D2] pb-4'>
            <div className='flex justify-between items-center'>
                <h3>Filter by Payment</h3>
                <FaAngleDown className='text-colorBold'/>
            </div>
        </div>

        {/* Filter by Shipment */}
        <div className='border-b border-[#D0D0D2] pb-4'>
            <div className='flex justify-between items-center'>
                <h3>Filter by Shipment</h3>
                <FaAngleDown className='text-colorBold'/>
            </div>
        </div>

        <Button type='button' buttonText='Filter' className='bg-primary w-[170px] mx-auto' />
        <Button type='reset' buttonText='Reset Filter' className='bg-[#fff] text-primary w-[170px] mx-auto' />
        
    </div>
  )
}

export default Sidebar