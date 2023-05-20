import React from 'react'
import Image from "next/image"
import laptop from '../../public/assets/category/laptop.svg'
import smartphone from '../../public/assets/category/smartphone.svg'
import camera from '../../public/assets/category/camera.svg'
import tv from '../../public/assets/category/tv-and-remote.svg'
import conditioner from '../../public/assets/category/air-conditioner.svg'
import speaker from '../../public/assets/category/speaker.svg'
import gamepad from '../../public/assets/category/gamepad.svg'
import headset from '../../public/assets/category/headset.svg'
import printer from '../../public/assets/category/printer.svg'
import recording from '../../public/assets/category/recording.svg'
import watch from '../../public/assets/category/smart-watch.svg'
import Partners from '../home/Partners'
import ProductList from './ProductList'

const category = [
  { img: laptop, name: "Computer & Laptop" },
  { img: smartphone, name: "Mobile & Tablet" },
  { img: camera, name: "Camera" },
  { img: tv, name: "TV & Smart Box" },
  { img: conditioner, name: "Home Appliances" },
  { img: watch, name: "Smart Watch" },
  { img: recording, name: "Microphone & Audio" },
  { img: printer, name: "Printer" },
  { img: gamepad, name: "Gaming" },
  { img: headset, name: "Accessories" },
  { img: speaker, name: "Other" },
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