import instagramIcon from '../../public/assets/instagram.svg'
import facebookIcon from '../../public/assets/facebook.svg'
import twitterIcon from '../../public/assets/twitter.svg'
import linkedinIcon from '../../public/assets/Linkedin.svg'
import callIcon from '../../public/assets/Call.svg'
import emailIcon from '../../public/assets/Email-1.svg'
import Image from 'next/image'

const TopHeader = () => {
  return (
    <header className='hidden lg:flex justify-between items-center py-3 border-b border-colorNormal'>
      <ul className='flex justify-between gap-4'>
        <li><Image src={instagramIcon} alt="instagram icon" /></li>
        <li><Image src={facebookIcon} alt="facebook icon" /></li>
        <li><Image src={twitterIcon} alt="twitter icon" /></li>
        <li><Image src={linkedinIcon} alt="linkedin icon" /></li>
      </ul>
      <div className='flex gap-8'>
        <div className='flex gap-4'>
          <Image src={callIcon} alt="call icon" />
          <span>+12 345 6789 0</span>
        </div>
        <div className='flex gap-4'>
          <Image src={emailIcon} alt="email icon" />
          <span>support@tronix.com</span>
        </div>
      </div>
    </header>
  )
}

export default TopHeader