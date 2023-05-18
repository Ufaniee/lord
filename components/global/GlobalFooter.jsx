import Image from 'next/image'
import master from '../../public/assets/icons/master.svg'
import visa from '../../public/assets/icons/visa.svg'
import paypal from '../../public/assets/icons/paypal.svg'
import instagram from '../../public/assets/icons/instagram-footer.svg'
import twitter from '../../public/assets/icons/twitter-footer.svg'
import facebook from '../../public/assets/icons/facebook-footer.svg'
import callIcon from '../../public/assets/Call.svg'
import emailIcon from '../../public/assets/Email-1.svg'
import Link from 'next/link'

const conpanyNavList = [
    {name: 'Home', link: '/'},
    {name: 'About', link: '/about'},
    {name: 'Product', link: '/products'},
    {name: 'Contact', link: '/contact'},
    {name: 'Become a Vendor', link: '/'}
]

const infoNavList = [
    {name: 'Help Center ', link: '/'},
    {name: 'Payment Methods', link: '/about'},
    {name: 'Return & Refund', link: '/products'},
    {name: 'Privacy Policy', link: '/contact'},
]

const GlobalFooter = () => {
  return (
    <footer className='w-full bg-milky text-center lg:text-left lg:px-20 pt-20 pb-10 '>
        <div className='flex lg:flex-row flex-col justify-between gap-20 px-10 lg:px-0'>
           <div className='flex flex-col gap-4'>
                <h2 className="font-['Poppins'] text-colorBold text-4xl font-semibold">BeelyDrop</h2>
                <p className="lg:w-[350px] font-['Poppins'] text-colorBold">Your destination to dominate the selling space and shop for variety of products</p>
                <div className='flex flex-col items-center lg:items-start gap-4'>
                    <div className='flex gap-4'>
                        <Image src={callIcon} alt="call icon" />
                        <span>+12 345 6789 0</span>
                    </div>
                    <div className='flex gap-4'>
                        <Image src={emailIcon} alt="email icon" />
                        <span>support@tronix.com</span>
                    </div>
                </div>
           </div>
           <div className='flex lg:flex-row flex-col justify-between gap-8'>
                <div className='flex flex-col gap-4'>
                    <h2 className='text-lg text-colorBold font-semibold'>Company</h2>
                    <div className='flex flex-col gap-2'>
                        {conpanyNavList.map((nav, index) => (
                            <Link href={nav.link} key={index}>{nav.name}</Link>
                        ))}
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <h2 className='text-lg text-colorBold font-semibold'>Information</h2>
                        <div className='flex flex-col gap-2'>
                            {infoNavList.map((nav, index) => (
                                <Link href={nav.link} key={index}>{nav.name}</Link>
                            ))}
                        </div>
                </div>
                <div className='flex flex-col items-center lg:items-start gap-4'>
                    <h2 className='text-lg text-colorBold font-semibold'>Follow Us</h2>
                    <div className='flex gap-4'>
                        <Image src={instagram} alt='instagram icon' width={50} height={50} className='p-3 bg-primary cursor-pointer'/>
                        <Image src={twitter} alt='twitter icon' width={50} height={50} className='p-3 bg-primary cursor-pointer'/>
                        <Image src={facebook} alt='facebook icon' width={50} height={50} className='p-3 bg-primary cursor-pointer'/>
                    </div>
                </div>
           </div> 
        </div>
        <hr className='w-full my-8 text-[#2F2F2F] lg:hidden' />
        <div className='flex justify-between lg:mt-20 px-10 lg:px-0 lg:pt-10 lg:border-t lg:border-t-[#A7A7A7]'>
            <p className='text-sm'>Copyright © 2021 Tronix. All Right Reseved</p>
            <div className='lg:flex gap-2 hidden'>
                <Image src={master} alt='master card'/>
                <Image src={visa} alt='visa card'/>
                <Image src={paypal} alt='paypal card'/>
            </div>
        </div>
    </footer>
  )
}

export default GlobalFooter