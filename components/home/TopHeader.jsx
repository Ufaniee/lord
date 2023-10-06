/** @format */
import shoppingBag from "../../public/assets/icons/shopping_bag.svg";
import emailIcon from "../../public/assets/icons/email.svg";
import instagramIcon from '../../public/assets/instagram.svg';
import facebookIcon from '../../public/assets/facebook.svg';
import twitterIcon from '../../public/assets/twitter.svg';
import linkedinIcon from '../../public/assets/Linkedin.svg'
import Image from 'next/image';
import SearchInput from '../SearchInput';
import Link from 'next/link';
import Button from '../global/Button';
import logo from '../../public/assets/siteLogo.jpg'

const TopHeader = () => {
  return (
    <header className='lg:flex justify-between items-center py-3 border-b border-colorNormal'>
      <Link href='/'>
            <Image src={logo} alt="logo" width={58} height={58}/>
        </Link>
      <div className='flex gap-8'>
      <ul className='flex justify-between gap-5'>
        <li><Image src={instagramIcon} alt="instagram icon" /></li>
        <li><Image src={facebookIcon} alt="facebook icon" /></li>
        <li><Image src={twitterIcon} alt="twitter icon" /></li>
        <li><Image src={linkedinIcon} alt="linkedin icon" /></li>
      </ul>
        </div>

       {/* Search Input */}
       <SearchInput />

      <div className="flex justify-between items-center gap-1">
        <div className="flex gap-10">
          <Link href="/cart" className="relative">
            <Image src={shoppingBag} alt="Shopping back" />
            <span className="absolute bg-primary text-xs rounded-full p-1 -top-4 left-5">
              99
            </span>
          </Link>
          <Image src={emailIcon} alt="Email Icon" />
        </div>
        <Link href="Authentication/userlogin">
          <Button type="button" buttonText="Sign In" className="text-primary" />
        </Link>
        <Link href="Authentication/usersignup">
          <Button type="button" buttonText="Sign Up" className="bg-primary" />
        </Link>
      </div>
  
    </header>
  )
}

export default TopHeader