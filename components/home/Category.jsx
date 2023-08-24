import Image from "next/image"
import groceries from '../../public/assets/category/groceries.svg'
import clothing from '../../public/assets/category/clothing.svg'
import health from '../../public/assets/category/health.svg'
import beauty from '../../public/assets/category/beauty.svg'
import devices from '../../public/assets/category/devices.svg'
import sports from '../../public/assets/category/sports.svg'
import fastfood from '../../public/assets/category/fastfood.svg'
import custom from '../../public/assets/category/custom.svg'
import toys from '../../public/assets/category/toys.svg'
import Link from 'next/link';


const category = [
  { img: fastfood, name: "Food"},
  { img: groceries, name: "Groceries" },
  { img: clothing, name: "Fashion & Clothing" },
  { img: health, name: "Health Products" },
  { img: beauty, name: "Beauty Products" },
  { img: devices, name: "Electronics & Devices" },
  { img: sports, name: "Sporting Products" },
  { img: toys, name: "Baby Products" },
  { img: custom, name: "Customizable Products" },
  



]


const Category = () => {
  return (
    <section className='my-20'>
      <h3 className='font-bold text-lg text-colorBold my-3'>Categories</h3>
      <div className='flex flex-wrap lg:flex-nowrap justify-between gap-3'>
        {category.map((item, index) => (
          <div key={index} className='flex lg:flex-row flex-col w-[100px] lg:w-auto text-center lg:text-left items-center gap-1 p-2 border border-colorNormal rounded-lg cursor-pointer'>
            <Image src={item.img} alt="" width={30} height={30}/>
            <span className='text-[13px] text-colorBold font-[Poppins]'>{item.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}


export default Category

