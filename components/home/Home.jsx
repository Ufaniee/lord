import TopHeader from './TopHeader'
import TopNav from './TopNav'
import NavBar from './NavBar'
import HeroSection from './HeroSection'
import Category from './Category'
import NewArrival from './NewArrival'
import Featured from './Featured'
import Collections from './Collections'

const Home = () => {
  return (
    <div className='w-[90%] mx-auto'>
        <TopHeader/>
        <TopNav/>
        <NavBar/>
        <HeroSection/>
        <Category/>
        <NewArrival/>
         <Featured/>
        <Collections/>
    </div>
  )
}

export default Home