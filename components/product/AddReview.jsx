import React from 'react'
import { MdStarRate } from 'react-icons/md'
import Button from '../global/Button'

const AddReview = () => {
  return (
    <div className='text-colorNormal mt-10 lg:mt-0 lg:pl-14 w-full lg:w-1/2'>
        <div className='w-full lg:w-[440px] flex flex-col gap-2'>
            <h3 className='font-semibold'>Add Your Review</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
        </div>
        <form className='flex flex-col gap-4 my-5 w-full text-sm'>
            <div>
                <label htmlFor="name">
                    Name *
                    <input type="text" required className="rounded-lg w-full h-11 px-3 py-2 border border-colorNormal focus:outline-none" />
                </label>
            </div>
            <div>
                <label htmlFor="name"> Email *</label>
                <input type="text" required className='rounded-lg w-full h-11 px-3 py-2 border border-colorNormal focus:outline-none' />
            </div>
            <div>
                <label htmlFor="name"> Review *</label>
                <textarea name="review" id="" cols="30" rows="5" required className='rounded-lg w-full px-3 py-2 border border-colorNormal focus:outline-none'></textarea>
            </div>
            <div className='flex items-center gap-2'>
            <span className='font-semibold'>Rating</span>
            <span className='flex gap-1'>
                {Array.from({length: 5}).map((star, index) => (
                    <MdStarRate key={index} className='text-yellow text-lg'/>
                  ))}
            </span>
          </div>
          <Button type='submit' buttonText='Submit' className='bg-primary w-32 text-sm font-semibold ' />
        </form>
    </div>
  )
}

export default AddReview