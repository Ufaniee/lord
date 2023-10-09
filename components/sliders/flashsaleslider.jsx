
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper";
import Button from "../global/Button";


const  FlashSaleslider = ({ flashsale }) => {


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
			{flashsale.map((item, index) => (
				<SwiperSlide key={index}>
				<div className='flex flex-col items-center gap-2 border border-gray rounded-b-2xl pb-5'>
					<div className='w-[350px] h-[250px] bg-gray relative'>
						<span className='bg-primary rounded-full p-2 absolute right-3 top-3'>New</span>
						<img src={item.image} alt={item.name} className='w-full h-full object-center' />
					</div>
					<h4>{item.name}</h4>
					<span className='text-primary'>${item.price}</span>
					<Button type='button' buttonText='Add to Cart' className='bg-primary w-[170px] mx-auto lg:mx-0' />
				</div>
			</SwiperSlide>
				 
            ))}
      </Swiper>
	);
}

export default FlashSaleslider