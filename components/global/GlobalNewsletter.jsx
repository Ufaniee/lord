import Image from 'next/image'
import React from 'react'
import newsletterIcon from '../../public/assets/Newsletter.svg'

const GlobalNewsletter = () => {
  return (
    <div className='lg:h-[250px] w-full bg-primary'>
        <div className='flex flex-col lg:flex-row lg:justify-between items-center text-center lg:text-left p-10 lg:p-20 gap-10'>
            <div className='flex gap-4 items-center'>
                <Image src={newsletterIcon} alt='' width={50} height={50} className='hidden lg:block' />
                <div className='flex flex-col gap-2'>
                    <h2 className='text-4xl lg:text-4xl font-semibold'>Join our newsletter now!</h2>
                    <p className=''>Register now and get our latest updates and promos.</p>
                </div>
            </div>
            
            <div className='flex flex-col lg:flex-row items-center lg:justify-center rounded-lg lg:w-[400px] w-full gap-3 lg:gap-0 lg:bg-[#FAFAFA] lg:px-4'>
                <input type="text" placeholder='Enter your email' className='w-full lg:w-[80%] px-9 lg:px-4 py-4 lg:z-10 outline-none rounded-lg bg-[#FAFAFA]'/>
                <div className='bg-[#000] px-8 lg:py-2 py-4 w-24 rounded-lg cursor-pointer text-[#fff]'>Join</div>
            </div>
        </div>
        
    </div>
  )
}

export default GlobalNewsletter