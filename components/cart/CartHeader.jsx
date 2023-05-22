import React from 'react'

const CartHeader = () => {
  return (
    <div>
        <span>Home &gt; <span className='text-primary'>My Cart</span></span>
        <div className='flex flex-col items-center gap-5 my-6'>
            <h1 className='text-lg lg:text-4xl font-semibold'>My Cart</h1>
            <div className='flex items-center gap-4'>
                <span className='flex items-center gap-2 text-primary text-sm lg:text-lg'>
                    <span className='p-3 w-14 h-14 text-center rounded-full border-2 border-primary'>1</span>
                    <span>My Cart</span>
                </span>
                <hr className='w-20 lg:w-72 border-2 border-colorBold' />
                <span className='flex items-center gap-2 text-[#D0D0D2] text-sm lg:text-lg'>
                    <span className='p-[10px] w-14 h-14 text-center rounded-full border-2 border-[#D0D0D2]'>2</span>
                    <span>My Checkout</span>
                </span>
            </div>
        </div>
    </div>
  )
}

export default CartHeader