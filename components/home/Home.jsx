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

const Home = () => {
  return (
    <>
      <div className='w-[90%] mx-auto'>
          <TopHeader/>
          <TopNav/>
          <NavBar/>
          <HeroSection/>
          <Category/>
          <NewArrival/>
          <Featured/>
          <Collections/>
          <FlashSale/>
          <Newsletter/>
          <Partners/>
      </div>
      <Footer/>
    </>
  )
}

export default Home