import MobileNav from '../home/MobileNav'
import GlobalFooter from './GlobalFooter'
import GlobalNav from './GlobalNav'
import GlobalNewsletter from './GlobalNewsletter'

const Layout = ({children}) => {
  return (
    <>
      <div className='w-[90%] mx-auto'>
          <GlobalNav/>
          <MobileNav/>
          {children}
      </div>
      <GlobalNewsletter/>
      <GlobalFooter/>
    </>
  )
}

export default Layout