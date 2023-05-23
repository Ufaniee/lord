import React from 'react'
import Button from '../global/Button'
import {FaTimes} from 'react-icons/fa'
import Link from 'next/link'
import Image from 'next/image'
import coupon from '../../public/assets/icons/coupon.svg'
import shoppingCart from '../../public/assets/icons/shopping_cart.svg'

const CartMain = () => {
  return (
        <div className='flex flex-col lg:flex-row gap-20 my-10'>
            <div className='w-full lg:w-3/5'>
                <div className='py-8 border-b border-primary text-colorNormal text-sm flex gap-4'>
                    <input type="checkbox" className='accent-primary' />
                    <label htmlFor="all"> Select All</label>
                </div>
                <div className='flex justify-between items-center gap-4 py-8 pr-3 border-b border-primary'>
                    <div className='flex items-center gap-4'>
                        <input type="checkbox" className='accent-primary'/>
                        <div className='w-[100px] h-[100px] bg-gray'></div>
                        <div className='flex flex-col gap-2'>
                            <h3>USB Speaker Portable</h3>
                            <span className='text-primary'>$100</span>
                            <div className='flex items-center gap-4 mt-3'>
                                <Button type='button' buttonText='-' className='bg-gray font-bold w-10 h-10 px-0 py-0'/>
                                <span className='text-primary'>1</span>
                                <Button type='button' buttonText='+' className='bg-primary font-bold w-10 h-10 px-0 py-0'/>
                            </div>
                        </div>
                    </div>
                    <FaTimes className='text-primary font-bold cursor-pointer'/>
                </div>
                {/* Delete Later */}
                <div className='flex justify-between items-center gap-4 py-8 pr-3 border-b border-primary'>
                    <div className='flex items-center gap-4'>
                        <input type="checkbox" className='accent-primary'/>
                        <div className='w-[100px] h-[100px] bg-gray'></div>
                        <div className='flex flex-col gap-2'>
                            <h3>USB Speaker Portable</h3>
                            <span className='text-primary'>$100</span>
                            <div className='flex items-center gap-4 mt-3'>
                                <Button type='button' buttonText='-' className='bg-gray font-bold w-10 h-10 px-0 py-0'/>
                                <span className='text-primary'>1</span>
                                <Button type='button' buttonText='+' className='bg-primary font-bold w-10 h-10 px-0 py-0'/>
                            </div>
                        </div>
                    </div>
                    <FaTimes className='text-primary font-bold cursor-pointer'/>
                </div>
            </div>
       

            {/* Summary section */}
            <div className='w-full lg:w-2/5 lg:mt-20'>
                <Link href='/discount' className='flex items-center justify-center gap-3 p-3 bg-[#E4E0DA] border border-primary font-semibold rounded-2xl'>
                    <Image src={coupon} alt='coupon icon' width={30} height={30}/> Have a coupon code? &gt; 
                </Link>
                <div className='flex flex-col gap-4 border border-primary rounded-2xl p-8 my-8'>
                    <h3 className='text-lg'>Summary</h3>
                    {/* Promotions sells */}
                    <div className='my-4'>
                        <h3 className='font-semibold'>Promotions</h3>
                        <div className='flex justify-between items-center my-4'>
                            <div className='flex items-center justify-center p-2 gap-3 bg-[#D5D9E7] border border-[#213473] rounded-2xl'>
                                <Image src={shoppingCart} alt='coupon icon' width={25} height={25}/>
                                <span className='text-[#001246]'><span className='font-semibold text-[10px] lg:text-base'>NEWCUSTOMER_1234 </span>(-5%)</span>  
                            </div>
                            <span className='text-[#3C8A3C]'>-$4.69</span>

                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <span className='text-colorNormal'>Total</span>
                        <span className='text-primary'>$200.00</span>
                    </div>
                    <Link href='/checkout' className='bg-primary font-semibold text-xs py-4 text-center rounded-lg'>Checkout</Link>
                    {/* <Button buttonText='Checkout' className='bg-primary font-semibold text-xs'/> */}
                    <Link href='/products' className='text-center text-sm'>Continue Shopping</Link> 
                </div>
            </div>

        </div> 
  )
}

export default CartMain