import React from 'react'

const ProductHeader = () => {
  return (
    <div className='my-4'>
        <span>Home &gt; <span className='text-primary'>All Categories</span></span>
        <div className='flex flex-col gap-4 mx-auto text-center w-full lg:w-[44%] my-5'>
            <h2 className='text-2xl font-semibold text-colorBold'>All Categories</h2>
            <p className='text-lg text-colorNormal'></p>
        </div>
    </div>
  )
}

export default ProductHeader