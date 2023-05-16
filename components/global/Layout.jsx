import React, { Children } from 'react'
import GlobalNav from '../home/GlobalNav'

const Layout = ({children}) => {
  return (
    <div className='w-[90%] mx-auto'>
        <GlobalNav/>
        {children}
    </div>
  )
}

export default Layout