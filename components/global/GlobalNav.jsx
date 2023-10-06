import logo from '../../public/assets/siteLogo.jpg'
import shoppingBag  from '../../public/assets/icons/shopping_bag.svg'
import emailIcon  from '../../public/assets/icons/email.svg'
import SearchInput from '../SearchInput'
import Link from 'next/link'
import Image from 'next/image'
import NavBar from '../home/NavBar'


const GlobalNav = () => {
  return (
    <section className='hidden lg:flex justify-between items-center'>
        <Link href='/'>
            <Image src={logo} alt="logo" width={58} height={58}/>
        </Link>
        <NavBar />
        <SearchInput/>
        <div className='flex justify-between items-center gap-1'>
            <div className='flex gap-10'>
                <Link href='/cart' className='relative'>
                    <Image src={shoppingBag} alt="Shopping back" />
                    <span className='absolute bg-primary text-xs rounded-full p-1 -top-4 left-5'>99</span>
                </Link>
                <Image src={emailIcon} alt="Email Icon" />
            </div>
        </div>
    </section>
      )
}

export default GlobalNav