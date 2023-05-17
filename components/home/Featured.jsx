import React from 'react'
import Timing from '../Timing'
import FeaturedSlider from '../sliders/FeaturedSlider'

const featuredProducts = [
    { name: 'Wireless Microphone', price: 29.99, promoPrice: 19.99 },
    { name: 'Smart Watch New Series', price: 29.99, promoPrice: 19.99 },
    { name: 'Camera HD + Lens', price: 29.99, promoPrice: 19.99 },
]

const Featured = () => {
  return (
    <section className='lg:my-20 my-0'>
        <div className='text-center my-10'>
            <h2 className='text-3xl text-colorBold font-semibold'>Featured Products</h2>
            <p className='text-gray'>Be the first to see new products dropped daily!12:15</p>
        </div>
        <div className='hidden lg:grid grid-cols-2 gap-4'>
            {featuredProducts.map((item, index) => (
                    index === 0 ? (
                        <div key={0} className='row-span-2 flex flex-col items-center justify-center gap-4 border border-gray rounded-3xl'>
                            <div className='flex flex-col items-center gap-1'>
                                <h4 className='text-3xl'>{item.name}</h4>
                                <span><span className='line-through text-colorNormal'>${item.price}</span> - <span className='text-primary'>${item.price}</span></span>
                            </div>
                            <div className='w-[300px] h-[200px] bg-gray'></div>
                            {/* Promo Timing */}
                            <Timing hrs={2} min={18} sec={27} />
                        </div>
                    ) : (
                        <div key={index + 1} className='flex border border-gray rounded-r-3xl'>
                            <div className='w-[200px] h-[250px] bg-gray'></div>
                            <div className='px-10 pt-6 flex flex-col gap-2'>
                                <span className='bg-primary px-6 py-1 w-40 rounded-lg'>Limited Offer</span>
                                <h4>{item.name}</h4>
                                <span><span className='line-through text-colorNormal'>${item.price}</span> - <span className='text-primary'>${item.price}</span></span>
                                {/* Promo Timing */}
                                <Timing hrs={2} min={18} sec={27} />
                            </div>
                        </div>
                    )
            ))}
        </div>
        <FeaturedSlider featuredProducts={featuredProducts}/>
    </section>
  )
}

export default Featured