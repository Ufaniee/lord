import React from 'react'

const AboutHeader = () => {
  return (
    <div className='mt-4'>
        <span>Home &gt; <span className='text-primary'>About</span></span>
        <div className='flex flex-col gap-4 mx-auto text-center w-full lg:w-[70%] my-12'>
            <h2 className='text-2xl font-semibold text-colorBold'>About BeelyDrop</h2>
            <p className='text-lg text-colorNormal'>Welcome to the space where users can buy, customize and send gifts to users. With Beelydrop we make shopping easier and 100% secure.</p>
        </div>
        <div className='h-[400px] bg-gray w-full rounded-[32px] my-10'>

        </div>
    </div>
  )
}

export default AboutHeader