import React from 'react'
import Button from '../global/Button'
import Link from 'next/link'

const Checkout = () => {
  return (
    <div>
        <div>
            <span>Home &gt; My Cart &gt; <span className='text-primary'>Checkout</span></span>
            <div className='flex flex-col items-center gap-5 my-6'>
                <h1 className='text-4xl font-semibold'>Checkout</h1>
                <div className='flex items-center gap-4'>
                    <span className='flex items-center gap-2 text-primary text-lg'>
                        <span className='p-3 w-14 h-14 text-center rounded-full border-2 border-primary'>1</span>
                        <span>My Cart</span>
                    </span>
                    <hr className='w-72 border-2 border-colorBold' />
                    <span className='flex items-center gap-2 text-primary text-lg'>
                        <span className='p-3 w-14 h-14 text-center rounded-full border-2 border-primary'>2</span>
                        <span>My Checkout</span>
                    </span>
                </div>
            </div>
        </div>

        <div className='flex flex-col lg:flex-row gap-20 my-10'>
            <div className='w-3/5'>
                <div className='py-5 border-b border-colorBold text-colorNormal text-sm'>
                    <h4>Buyer Info</h4>
                </div>
                <form className='mt-8'>
                    <div className='flex justify-between items-center gap-4'>
                        <div className='flex flex-col gap-3 w-1/2'>
                            <div>
                                <label htmlFor="name">First Name *</label>
                                <input type="text" required className="rounded-lg w-full h-11 px-3 py-2 mt-4 border border-colorNormal focus:outline-none" />
                            </div>
                            <div>
                                <label htmlFor="address"> Address *</label>
                                <input type="text" required className='rounded-lg w-full h-11 px-3 py-2 mt-4 border border-colorNormal focus:outline-none' />
                            </div>
                            <div>
                                <label htmlFor="country"> Country *</label>
                                <input type="text" required className='rounded-lg w-full h-11 px-3 py-2 mt-4 border border-colorNormal focus:outline-none' />
                            </div>
                            <div>
                                <label htmlFor="state"> State *</label>
                                <select name="" id="" className='rounded-lg w-full h-11 px-3 py-2 mt-4 border border-colorNormal focus:outline-none accent-primary'>
                                    <option value="" className='accent-primary'>Select State</option>
                                    <option value="">Anambra</option>
                                    <option value="">Enugu</option>
                                    <option value="">Lagos</option>
                                    <option value="">Abuja</option>
                                </select>
                            </div>
                        </div>
                        <div className='flex flex-col gap-3 w-1/2'>
                            <div>
                                <label htmlFor="name">Last Name *</label>
                                <input type="text" required className="rounded-lg w-full h-11 px-3 py-2 mt-4 border border-colorNormal focus:outline-none" />
                            </div>
                            <div>
                                <label htmlFor="contact"> Contact *</label>
                                <input type="tel" required className='rounded-lg w-full h-11 px-3 py-2 mt-4 border border-colorNormal focus:outline-none' />
                            </div>
                            <div>
                                <label htmlFor="city"> City *</label>
                                <input type="text" required className='rounded-lg w-full h-11 px-3 py-2 mt-4 border border-colorNormal focus:outline-none' />
                            </div>
                            <div>
                                <label htmlFor="zip"> Zip Code *</label>
                                <input type="number" required className='rounded-lg w-full h-11 px-3 py-2 mt-4 border border-colorNormal focus:outline-none' />
                            </div>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <label htmlFor="note"> Note</label>
                        <textarea name="note" id="" cols="30" rows="4" required className='rounded-lg w-full px-3 py-2 mt-4 border border-colorNormal focus:outline-none'></textarea>
                    </div>
                </form>
            </div>
       

            {/* Summary section */}
            <div className='w-2/5'>
                
                <div className='flex flex-col gap-4 border border-primary rounded-2xl p-8 my-8'>
                    <h3 className='font-semibold text-center'>Your Order Summary</h3>
                    <div className='flex justify-between text-colorNormal'>
                        <span>1x</span>
                        <span>Total</span>
                        <span>$100.00</span>
                    </div>
                    <div className='flex justify-between pb-5 border-b border-colorBold text-sm text-colorNormal'>
                        <span>1x</span>
                        <span>Total</span>
                        <span>$100.00</span>
                    </div>
                    <div className='flex justify-between text-colorNormal'>
                        <span>Subtotal</span>
                        <span>$100.00</span>
                    </div>
                    <div className='flex justify-between text-colorNormal'>
                        <span>Shipping</span>
                        <span>$15.00</span>
                    </div>
                    <div className='flex justify-between pb-5 border-b border-colorBold text-sm text-colorNormal'>
                        <span>Tax</span>
                        <span>$10.00</span>
                    </div>
                    <div className='flex justify-between py-5 border-b border-colorBold text-sm text-colorNormal'>
                        <span>Total</span>
                        <span className='text-primary'>$125.00</span>
                    </div>
                    <h3>Payment</h3>
                    <div className='flex justify-between'>
                        <Button buttonText='Credit Card' className='text-xs'/>
                        <Button buttonText='Bank Transfer' className='bg-colorBold text-xs text-colorNormal'/>
                        <Button buttonText='Paypal' className='text-xs'/>
                    </div>
                    <Button buttonText='Checkout' className='bg-primary font-semibold text-xs'/>
                    <Link href='/cart' className='text-center text-sm'>Back to Cart</Link> 
                </div>
            </div>

        </div>

    </div>
  )
}

export default Checkout