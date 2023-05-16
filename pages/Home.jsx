import TopHeader from '../components/home/TopHeader'
import TopNav from '../components/home/TopNav'
import NavBar from '../components/home/NavBar'
import HeroSection from '../components/home/HeroSection'
import Category from '../components/home/Category'
import NewArrival from '../components/home/NewArrival'
import Featured from '../components/home/Featured'
import Collections from '../components/home/Collections'

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