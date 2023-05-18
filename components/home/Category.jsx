import Image from "next/image"
import laptop from '../../public/assets/category/laptop.svg'
import smartphone from '../../public/assets/category/smartphone.svg'
import camera from '../../public/assets/category/camera.svg'
import tv from '../../public/assets/category/tv-and-remote.svg'
import conditioner from '../../public/assets/category/air-conditioner.svg'
import speaker from '../../public/assets/category/speaker.svg'
import gamepad from '../../public/assets/category/gamepad.svg'

const category = [
  { img: {laptop}, name: "Computer & Laptop" },
  { img: {smartphone}, name: "Mobile & Tablet" },
  { img: {camera}, name: "Camera" },
  { img: {tv}, name: "TV & Smart Box" },
  { img: {conditioner}, name: "Home Appliances" },
  { img: {speaker}, name: "Accessories" },
  { img: {gamepad}, name: "Other Categories" },
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