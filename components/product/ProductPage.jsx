import React from 'react'
import ProductHeader from './ProductHeader'
import Sidebar from './Sidebar'
import ProductCategories from './ProductCategories'

const ProductPage = () => {
  return (
    <>
        <ProductHeader/>
        <div className='flex gap-7 w-full justify-between mt-10'>
            <Sidebar/>
            <ProductCategories/>
        </div>
    </>
  )
}

export default ProductPage