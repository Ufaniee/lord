import TopHeader from './TopHeader'
import TopNav from './TopNav'
import NavBar from './NavBar'
import HeroSection from './HeroSection'
import Category from './Category'
import NewArrival from './NewArrival'
import Featured from './Featured'
import Collections from './Collections'
import FlashSale from './FlashSale'
import Newsletter from './Newsletter'
import Partners from './Partners'
import Footer from './Footer'
import MobileNav from './MobileNav'
import DownloadApp from './DownloadApp'

const Home = () => {
  return (
    <>
      <div className='w-[90%] mx-auto'>
          <TopHeader/>
          <TopNav/>
          <MobileNav/>
          <NavBar/>
          <HeroSection/>
          <Category/>
          <DownloadApp/>
          <NewArrival/>
          <Featured/>
          <Collections/>
          <FlashSale/>
          <Newsletter/>
          <Partners className='flex-wrap justify-center gap-14 lg:gap-20'/>
      </div>
      <Footer/>
    </>
  )
}

export default Home