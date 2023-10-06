import React from 'react'
import { MdStarRate } from "react-icons/md";


const ProductReview = () => {
  return (
    <div className='flex flex-col gap-4 text-colorNormal'>
      <div className='flex items-end gap-4'>
        <div className='w-[50px] h-[50px] bg-gray'></div>
        <div className='flex flex-col'>
          <h3>Vanille</h3>
          <div className='flex items-center gap-2'>
            <span className='text-primary'>5.0</span>
            <span className='flex gap-1'>
                {Array.from({length: 5}).map((star, index) => (
                    <MdStarRate key={index} className='text-yellow'/>
                  ))}
            </span>
          </div>
        </div>
        <span className='text-colorNormal'>1 Month Ago</span>
      </div>
      <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
    </div>
  )
}

export default ProductReview