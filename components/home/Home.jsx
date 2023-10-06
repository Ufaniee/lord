import TopHeader from './TopHeader'
import TopNav from './TopNav'
import NavBar from './NavBar'
import DownloadApp from './DownloadApp'
import NewArrival from './NewArrival'
import Featured from './Featured'
import Newsletter from './Newsletter'
import Footer from './Footer'
import MobileNav from './MobileNav'
import FlashSale from './FlashSale'
import Collections from './Collections'

const Home = () => {
  return (
    <>
      <div className='w-[90%] mx-auto'>
          <TopHeader/>
          <TopNav/>
          <NavBar/>
          <DownloadApp/>
          <MobileNav/>
          <Featured/>
          <NewArrival/>
          <Collections/>
          <FlashSale/>
          <Newsletter/>
      </div>
      <Footer/>
    </>
  )
}

export default Home