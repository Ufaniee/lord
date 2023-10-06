import Image from 'next/image'
import React from 'react'
import newsletterIcon from '../../public/assets/icons/newsletter.svg'

const GlobalNewsletter = () => {
  return (
        <div className='lg:h-[329px] w-full bg-primary rounded-[32px] my-10 '>
            <div className='flex flex-col text-center lg:text-left p-10 lg:p-20 gap-10'>
                <div className='flex flex-col gap-2'>
                    <h2 className='text-2xl lg:text-3xl font-semibold'>Subscribe on  our newsletter now!</h2>
                    <p className='lg:text-lg'>Get Daily News on upcoming offers from many suppliers all over the world.</p>
                </div>
                <div className='flex flex-col lg:flex-row items-center lg:items-start rounded-lg lg:w-[500px] w-full gap-3 lg:gap-0'>
                    <input type="text" placeholder='Enter your email' className='w-full lg:w-[95%] px-9 py-4 lg:z-10 outline-none rounded-lg bg-[#FAFAFA] lg:px-2'/>
                    <div className='bg-[#7876f0] px-3 py-4 w-24 rounded-lg cursor-pointer text-[#fff]'>Subscribe</div>
                </div>
            </div>
    
        </div>
  )
}

export default GlobalNewsletter