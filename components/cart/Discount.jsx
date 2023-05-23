import React from 'react'
import forwardArrow from '../../public/assets/icons/arrow-forward.svg'
import Image from 'next/image'
import { FaRegCopy } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";


const Discount = () => {
  return (
    <div>
        <h1 className='font-bold text-4xl text-center my-10'>My discounts</h1>
        <div className='flex flex-col gap-4 my-5'>
            <h3>Coupon Codes:</h3>
            <div className='flex w-[400px] border border-colorNormal'>
                <input type="text" placeholder='Enter your coupon' className='w-[95%] z-10 outline-none px-2 placeholder:text-colorNormal'/>
                <Image src={forwardArrow} alt="Arrow Icon" width={50} height={50} className='bg-primary p-3 cursor-pointer' />
            </div>
        </div>
        <div className='my-10'>
            <h2 className='font-bold'>&gt; My coupons</h2>
            <div className='flex gap-4 py-10'>
                <div className='p-8 border border-colorNormal rounded-2xl w-1/3'>
                    <h2 className='font-bold text-2xl'>5% OFF</h2>
                    <span className='text-sm font-semibold'>FOR WHOLE ORDER</span>
                    <div className='flex justify-between items-center my-5'>
                        <span className='text-[#163ED4] text-sm'>Code: NEWCUSTOMER_1234</span>
                        <div className='font-bold flex gap-3 text-xs'>
                            <span className='flex items-center gap-2'><FaRegCopy/> Copy</span>
                            <span className='flex items-center gap-2'><FaArrowRight/>Apply</span>
                        </div>
                    </div>
                    <ul className='font-[#8B94B2] text-xs list-disc list-outside lis'>
                        <li>05/08/2021 04:00 – 09/08/2021 12:00</li>
                        <li>For all products.</li>
                        <li>Combinations: Get 20% off when you spend over $169.00 or get 15% off when you spend over $89.00.</li>
                    </ul>
                </div>
                <div className='p-8 border border-colorNormal rounded-2xl w-1/3'>
                    <h2 className='font-bold text-2xl'>5% OFF</h2>
                    <span className='text-sm font-semibold'>FOR WHOLE ORDER</span>
                    <div className='flex justify-between items-center my-5'>
                        <span className='text-[#163ED4] text-sm'>Code: NEWCUSTOMER_1234</span>
                        <div className='font-bold flex gap-3 text-xs'>
                            <span className='flex items-center gap-2'><FaRegCopy/> Copy</span>
                            <span className='flex items-center gap-2'><FaArrowRight/>Apply</span>
                        </div>
                    </div>
                    <ul className='font-[#8B94B2] text-xs list-disc list-outside lis'>
                        <li>05/08/2021 04:00 – 09/08/2021 12:00</li>
                        <li>For all products.</li>
                        <li>Combinations: Get 20% off when you spend over $169.00 or get 15% off when you spend over $89.00.</li>
                    </ul>
                </div>
                <div className='p-8 border border-colorNormal rounded-2xl w-1/3'>
                    <h2 className='font-bold text-2xl'>5% OFF</h2>
                    <span className='text-sm font-semibold'>FOR WHOLE ORDER</span>
                    <div className='flex justify-between items-center my-5'>
                        <span className='text-[#163ED4] text-sm'>Code: NEWCUSTOMER_1234</span>
                        <div className='font-bold flex gap-3 text-xs'>
                            <span className='flex items-center gap-2'><FaRegCopy/> Copy</span>
                            <span className='flex items-center gap-2'><FaArrowRight/>Apply</span>
                        </div>
                    </div>
                    <ul className='font-[#8B94B2] text-xs list-disc list-outside lis'>
                        <li>05/08/2021 04:00 – 09/08/2021 12:00</li>
                        <li>For all products.</li>
                        <li>Combinations: Get 20% off when you spend over $169.00 or get 15% off when you spend over $89.00.</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Discount