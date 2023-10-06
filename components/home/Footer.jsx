import Image from 'next/image'
import master from '../../public/assets/icons/master.svg'
import visa from '../../public/assets/icons/visa.svg'
import paypal from '../../public/assets/icons/paypal.svg'
import instagram from '../../public/assets/icons/instagram-footer.svg'
import twitter from '../../public/assets/icons/twitter-footer.svg'
import facebook from '../../public/assets/icons/facebook-footer.svg'
import Link from 'next/link'

const conpanyNavList = [
    {name: 'About Us', link: '/'},
    {name: 'Product', link: '/'},
    {name: 'Contact', link: '/'},
    {name: 'Become a Vendor', link: '/'}
]

const infoNavList = [
    {name: 'Help Center ', link: '/'},
    {name: 'Payment Methods', link: '/'},
    {name: 'Return & Refund', link: '/'},
    {name: 'Privacy Policy', link: '/'},
]

const ForUsers = [
    {name: 'Help Center ', link: '/'},
    {name: 'Payment Methods', link: '/'},
    {name: 'Return & Refund', link: '/'},
    {name: 'Privacy Policy', link: '/'},
]

const Footer = () => {
  return (
    <footer className='w-full bg-milky text-center lg:text-left lg:px-20 pt-20 pb-10 '>
        <div className='flex lg:flex-row flex-col justify-between gap-20 px-10'>
           <div className='flex flex-col gap-4'>
                <h2 className="font-['Poppins'] text-colorBold text-4xl font-semibold">Ani Joseph</h2>
                <p className="lg:w-[350px] font-['Poppins'] text-colorBold">Best Information about the company lies here</p>
                <div className='lg:flex gap-4 hidden'>
                    <Image src={instagram} alt='instagram icon' width={50} height={50} className='p-3 bg-primary cursor-pointer'/>
                    <Image src={twitter} alt='twitter icon' width={50} height={50} className='p-3 bg-primary cursor-pointer'/>
                    <Image src={facebook} alt='facebook icon' width={50} height={50} className='p-3 bg-primary cursor-pointer'/>
                </div>
           </div>
           <div className='flex lg:flex-row flex-col justify-between gap-8'>
                <div className='flex flex-col gap-4'>
                    <h2 className='text-lg text-colorNormal font-semibold'>Company</h2>
                    <div className='flex text-gray flex-col gap-2'>
                        {conpanyNavList.map((nav, index) => (
                            <Link href={nav.link} key={index}>{nav.name}</Link>
                        ))}
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <h2 className='text-lg text-colorNormal font-semibold'>Information</h2>
                        <div className='flex  text-gray flex-col gap-2'>
                            {infoNavList.map((nav, index) => (
                                <Link href={nav.link} key={index}>{nav.name}</Link>
                            ))}
                        </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <h2 className='text-lg text-colorNormal font-semibold'>For Users</h2>
                        <div className='flex  text-gray flex-col gap-2'>
                            {ForUsers.map((nav, index) => (
                                <Link href={nav.link} key={index}>{nav.name}</Link>
                            ))}
                        </div>
                </div>
                <div className='flex flex-col items-center lg:items-start gap-4'>
                    <h2 className='text-lg text-colorNormal font-semibold'>Contact</h2>
                    <div className='flex text-gray gap-4'>
                        <span>+234-8032701991</span>
                    </div>
                    <div className='flex text-gray gap-4'>
                        <Image src={master} alt='master card'/>
                        <Image src={visa} alt='visa card'/>
                        <Image src={paypal} alt='paypal card'/>
                        
                    </div>
                </div>
           </div> 
        </div>
        <hr className='w-full my-8 text-[#2F2F2F] lg:hidden' />
        <div className='flex justify-between lg:mt-20 px-10'>
            <p className='text-sm'>Copyright © 2023 E-commerce.</p>
        </div>
    </footer>
  )
}

export default Footer