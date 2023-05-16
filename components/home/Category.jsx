import Image from "next/image"

const category = [
  { img: '/categoryIcons/Laptop.svg', name: "Computer & Laptop" },
  { img: '/categoryIcons/Smartphone.svg', name: "Mobile & Tablet" },
  { img: '/categoryIcons/Camera.svg', name: "Camera" },
  { img: '/categoryIcons/Tv-and-Remote.svg', name: "TV & Smart Box" },
  { img: '/categoryIcons/Air-Conditioner.svg', name: "Home Appliances" },
  { img: '/categoryIcons/Speaker.svg', name: "Accessories" },
  { img: '/categoryIcons/Gamepad.svg', name: "Other Categories" },
]


const Category = () => {
  return (
    <section className='my-20'>
      <h3 className='font-bold text-lg text-colorBold my-3'>Categories</h3>
      <div className='flex flex-wrap lg:flex-nowrap justify-between gap-3'>
        {category.map((item, index) => (
          <div key={index} className='flex lg:flex-row flex-col w-[100px] lg:w-auto text-center lg:text-left items-center gap-1 p-2 border border-colorNormal rounded-lg cursor-pointer'>
            <Image src={item.img} alt={item.name} width={30} height={30}/>
            <span className='text-[13px] text-colorBold font-[Poppins]'>{item.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Category