import React from 'react'
import Button from '../global/Button'

const ContactForm = () => {
  return (
    <form className='flex flex-col gap-4 w-full lg:w-3/5 text-sm text-colorNormal p-8 border border-colorNormal rounded-[32px]'>
            <div>
                <label htmlFor="name">
                    Name *
                    <input type="text" required className="rounded-lg w-full px-3 py-2 border border-colorNormal focus:outline-none" />
                </label>
            </div>
            <div>
                <label htmlFor="name"> Email *</label>
                <input type="text" required className='rounded-lg w-full px-3 py-2 border border-colorNormal focus:outline-none' />
            </div>
            <div>
                <label htmlFor="name"> Subject *</label>
                <textarea name="subject" id="" cols="30" rows="3" required className='rounded-lg w-full px-3 py-2 border border-colorNormal focus:outline-none'></textarea>
            </div>
            <div className='flex flex-col lg:flex-row justify-between items-center gap-2'>
                <label htmlFor="">
                    <input type="checkbox" className='accent-primary' /> Accept Terms & Condition 
                </label>
                <Button type='submit' buttonText='Submit' className='bg-primary w-32 text-sm font-semibold ' />
            </div>
        </form>
  )
}

export default ContactForm