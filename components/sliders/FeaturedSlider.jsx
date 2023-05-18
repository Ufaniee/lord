
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper";
import Button from "../global/Button";
import Timing from "../Timing";


const FeaturedSlider = ({ featuredProducts }) => {


	return (
        <Swiper className="lg:!hidden"
			slidesPerView={1}
			centeredSlides={true}
			spaceBetween={20}
			grabCursor={true}
			// autoplay={{
			// 	delay: 2500,
			// 	disableOnInteraction: false,
			//   }}
			pagination={{
				clickable: true,
			}}
			modules={[Pagination, Autoplay]}
		>
			{featuredProducts.map((item, index) => (
				<SwiperSlide key={index}>
					<div className='flex flex-col items-center justify-center gap-4 border border-gray rounded-3xl py-4'>
                            <div className='flex flex-col items-center gap-1'>
                                <h4 className='text-2xl'>{item.name}</h4>
                                <span><span className='line-through text-colorNormal'>${item.price}</span> - <span className='text-primary'>${item.price}</span></span>
                            </div>
                            <div className='w-[300px] h-[200px] bg-gray'></div>
                            {/* Promo Timing */}
                            <Timing hrs={2} min={18} sec={27} />
                    </div>
                </SwiperSlide>
				 
            ))}
      </Swiper>
	);
}

export default FeaturedSlider