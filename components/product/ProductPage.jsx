import React from 'react'
import ProductHeader from './ProductHeader'
import Sidebar from './Sidebar'
import ProductCategories from './ProductCategories'
import ProductList from './ProductList'
import Others from './Others'

const ProductPage = () => {
  return (
    <>
        <ProductHeader/>
        <div className='flex gap-7 w-full justify-between mt-10'>
            <Sidebar/>
          <ProductList/>
        </div>
    </>
  )
}

export default ProductPage