import React from 'react'

const Collections = () => {
  return (
    <section className='my-20'>
        <div className='text-center my-10'>
            <h2 className='text-3xl text-colorBold font-semibold'>Our Collections</h2>
            <p className='text-gray'>A wide variety of products made easier to find. Right at your fingertips</p>
        </div>
        <div className='flex justify-between gap-4'>
            <div className='w-[50%] bg-gray rounded-xl border border-gray'>
                <div className='mx-auto w-72 bg-[#FAFAFA] opacity-80 rounded-xl text-center my-16 p-6'>
                    <h2 className='text-colorBold text-lg font-bold mb-2'>PC Gaming Collection</h2>
                    <p className='text-xs'>New Season, New Products. Be the first to get them</p>
                </div>
            </div>
            <div className='w-[50%] bg-gray rounded-xl border border-gray'>
                <div className='mx-auto w-72 bg-[#FAFAFA] opacity-80 rounded-xl text-center my-16 p-6'>
                    <h2 className='text-colorBold text-lg font-bold mb-2'>Camera Collection</h2>
                    <p className='text-xs'>New Season, New Products. Be the first to get them</p>
                </div>
            </div>
        </div>
        
    </section>
  )
}

export default Collections