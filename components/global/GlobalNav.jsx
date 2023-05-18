import logo from '../../public/assets/siteLogo.jpg'
import shoppingBag  from '../../public/assets/Shopping_bag.svg'
import emailIcon  from '../../public/assets/Email.svg'
import SearchInput from '../SearchInput'
import Link from 'next/link'
import Image from 'next/image'
import NavBar from '../home/NavBar'

const GlobalNav = () => {
  return (
    <section className='hidden lg:flex justify-between items-center'>
        <Link href='/'>
            <Image src={logo} alt="logo" />
        </Link>
        <NavBar/>

        {/* <div className='flex gap-4'> */}
            {/* <Image src={fourDots} alt="Four Dots icon" /> */}
            {/* Search Input */}
            <SearchInput/>
        {/* </div> */}
        <div className='flex justify-between items-center gap-1'>
            <div className='flex gap-10'>
                <div className='relative'>
                    <Image src={shoppingBag} alt="Shopping back" />
                    <span className='absolute bg-primary text-xs rounded-full p-1 -top-4 left-5'>99</span>
                </div>
                <Image src={emailIcon} alt="Email Icon" />
            </div>
        </div>
    </section>
  )
}

export default GlobalNav