import Image from 'next/image'
import brand from '../../public/assets/aboutus/brand.svg'
import fastDelivery from '../../public/assets/aboutus/fast_delivery.svg'
import cashOnDelivery from '../../public/assets/aboutus/cash_on_delivery.svg'
import quality from '../../public/assets/aboutus/quality.svg'

const whyUs = [
    {title:'54 Brands', subTitle: 'Over 200k listings, Stay shopping', img: brand },
    {title:'Fast Delivery', subTitle: 'Choose our fast delivery option for 1-3 days no matter where you live', img: fastDelivery },
    {title:'COD Service', subTitle: 'Stay Alert, Shop and Pay right at your doorsteps', img: cashOnDelivery },
    {title:'100% Original Products', subTitle: 'Exclusive access to the best of products', img: quality },
]

const WhyUs = () => {
  return (
    <section className='flex flex-col gap-10 text-center my-20'>
        <h2 className='text-2xl font-semibold text-colorBold'>Why Choosing Us</h2>
        <div className='flex lg:flex-row flex-col justify-between gap-10'>
            {whyUs.map((item,index) => (
              <div key={index} className='flex flex-col justify-center items-center gap-2 w-full lg:w-[25%]'>
                <Image src={item.img} alt={item.title} width={50} height={50}/>
                <h3 className='font-medium text-lg text-colorBold'>{item.title}</h3>
                <p className='text-sm text-colorNormal'>{item.subTitle}</p>
            </div>  
            ))}
            
        </div>
    </section>
  )
}

export default WhyUs