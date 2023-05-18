import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper";
import Button from "../global/Button";
import { HiArrowLongLeft } from "react-icons/hi2";
import { HiArrowLongRight } from "react-icons/hi2";
import Timing from '../Timing';
import ProgressBar from '../ProgressBar';


const flashSaleProducts = [
    { name: 'Wireless Microphone', price: 29.99, promoPrice: 19.99, available: 10, sold: 5 },
    { name: 'Air Purifier', price: 29.99, promoPrice: 19.99, available: 15, sold: 11 },
    { name: 'Bluetooth Printer', price: 29.99, promoPrice: 19.99, available: 5, sold: 2 },
]

const FlashSale = () => {
  return (
    <div className='my-20 relative'>
        <div className='flex justify-between my-5'>
            <h2 className='text-3xl text-colorBold font-semibold'>Flash Sale</h2>
            <div className='flex items-center gap-2'>
                <HiArrowLongLeft/>
                {/* <div className='swiper-pagination'>

                </div> */}
                <div className="flex">
                    {Array.from({ length: flashSaleProducts.length }).map((item, index) => (
                        <div key={index} className={`h-2 mx-1 w-2 rounded-full bg-gray`}/>
                        // <div key={index} onClick={() => moveDot(index + 1)} className={`h-2 mx-1 ${slideIndex === index + 1 ? 'w-5 rounded-lg bg-primary' : 'w-2 rounded-full bg-[#FAFAFA]'}`}/>
                        ))}
			    </div>
                <HiArrowLongRight/>
            </div>
        </div>

        <div className='flex flex-col lg:flex-row justify-between w-full gap-5 lg:gap-5'>
                <div className='w-[100%] lg:w-[20%] flex flex-col items-center gap-2 border border-gray rounded-2xl px-5 pt-5 bg-primary font-bold'>
                    <h3>Up to 30% Off!</h3>
                    <div className='flex flex-col items-center justify-center mt-20'>
                        <span>Sale End in:</span>
                        <Timing hrs={1} min={34} sec={26} />
                    </div>  
                </div >
                <div className="flex flex-col lg:flex-row justify-between gap-4 lg:w-[75%] w-[100%]">
                    {/* <Swiper className='flash-sales'
                        centeredSlides={true}
                        spaceBetween={10}
                        grabCursor={true}
                        // autoplay={{
                        // 	delay: 2500,
                        // 	disableOnInteraction: false,
                        //   }}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            640: {
                              slidesPerView: 2
                            },
                            1000: {
                              slidesPerView: 3
                            },
                            1300: {
                              slidesPerView: 3
                            }
                          }}
                        modules={[Pagination, Autoplay]}
                    > */}
                        {flashSaleProducts.map((item, index) => (
                            // <SwiperSlide key={index}>
                                <div key={index} className='flex flex-col w-full items-center gap-2 border border-gray rounded-b-2xl pb-5'>
                                    <div className='w-full h-[150px] bg-gray relative'>
                                        <span className='bg-primary rounded-lg p-2 absolute right-3 top-3'>25% OFF</span>
                                    </div>
                                    <h4>{item.name}</h4>
                                    <span><span className='line-through text-colorNormal'>${item.price}</span> - <span className='text-primary'>${item.price}</span></span>
                                    <div className='w-[80%]'>
                                        <div className='flex justify-between text-colorBold'>
                                            <span>Avaliable: {item.available}</span>
                                            <span>Sold: {item.sold}</span>
                                        </div>
                                        <ProgressBar bgColor='#FCC313' completed={(item.sold/item.available)*(100/1)}/>
                                    </div>
                                </div>
                            // </SwiperSlide>
                            
                        ))}
                    {/* </Swiper> */}
                    </div>
        </div>
    </div>
  )
}

export default FlashSale