import React from 'react'
import Image from "next/image"
import groceries from '../../public/assets/category/groceries.svg'
import clothing from '../../public/assets/category/clothing.svg'
import health from '../../public/assets/category/health.svg'
import beauty from '../../public/assets/category/beauty.svg'
import devices from '../../public/assets/category/devices.svg'
import sports from '../../public/assets/category/sports.svg'
import fastfood from '../../public/assets/category/fastfood.svg'
import Partners from '../home/Partners'
import ProductList from './ProductList'

const category = [
  { img: fastfood, name: "Food" },
  { img: groceries, name: "Groceries" },
  { img: clothing, name: "Fashion & Clothing" },
  { img: health, name: "Health Products" },
  { img: beauty, name: "Beauty Products" },
  { img: devices, name: "Electronics & Devices" },
  { img: sports, name: "Sporting Products" },
]

const ProductCategories = () => {
  return (
    <div className='w-[100%] lg:w-[75%]' >
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-2 place-content-between'>
        {category.map((item, index) => (
          <div key={index} className='flex flex-col w-[150px] lg:w-[200px] p-3 items-center text-center gap-1 border border-colorNormal rounded-lg cursor-pointer'>
            <Image src={item.img} alt={item.name} width={30} height={30}/>
            <span className='text-colorBold font-[Poppins]'>{item.name}</span>
          </div>
        ))}
      </div>

      {/* Partners */}
      <div className='my-10'>
        <h3 className='text-colorBold font-semibold text-2xl'>Featured Brand</h3>
        <Partners className='justify-between gap-5 mt-4 flex-wrap'/>
      </div>

      {/* Product Listing */}
      <ProductList/>
    </div>
  )
}

export default ProductCategories