import React from 'react'
import Address from './Address'
import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <div className='my-10'>
        <div className='w-full lg:w-2/4 text-colorBold flex flex-col text-center lg:text-left gap-2'>
          <h1 className='font-semibold text-2xl'>Contact Us</h1>
          <p className='text-sm'>Learn more about our products and services to get a better experience in shopping at our website. Please complete this form to get the latest information from us. Our Customer Service is available on 24/7. The information you provide will be confidential and not shared with third parties.</p>
        </div>
        <div className='flex flex-col lg:flex-row justify-between gap-4 my-8'>
            {/* contact Form here */}
            <ContactForm/>

            {/* Contact Addresses */}
            <Address/>
        </div>
    </div>
  )
}

export default Contact