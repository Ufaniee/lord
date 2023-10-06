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
  { img: fastfood, name: "Food", link: '/food', link: '/productslist'},
  { img: groceries, name: "Groceries", link: '/productslist' },
  { img: clothing, name: "Fashion & Clothing", link: '/productslist' },
  { img: health, name: "Health Products", link: '/productslist' },
  { img: beauty, name: "Beauty Products" , link: '/productslist'},
  { img: devices, name: "Electronics & Devices", link: '/productslist' },
  { img: sports, name: "Sporting Products", link: '/Products' },
  { img: toys, name: "Baby Products", link: '/productslist' },
  { img: custom, name: "Customizable Products", link: '/productslist' },
]


const Category = () => {
  return (
    <section className='my-20'>
      <h2 className='font-bold text-3xl text-center text-colorNormal my-3'>Categories</h2>
      <div className='flex flex-wrap lg:flex-nowrap justify-between gap-3'>
        {category.map((category, index) => (
         <Link key={index} href={category.link}>
         <div className='flex lg:flex-wrap flex-col w-[100px] lg:w-auto text-center lg:text-left items-center gap-1 p-2 border border-colorNormal rounded-lg cursor-pointer'>
           <Image src={category.img} alt="" width={30} height={30} />
           <span className='text-[13px] text-colorBold font-[Poppins] lg:pr-4'>{category.name}</span>
         </div>
       </Link>
        ))}
      </div>
    </section>
  )
}


export default Category

