import React, { useEffect, useState } from 'react';
// import ButtonSlider from './ButtonSlider';
// import { dataSlider } from '../../constants';
import Button from '../global/button';

const NewArrivalSlider = ({ newArrival }) => {
	const [ slideIndex, setSlideIndex ] = useState(1);
	const timeoutRef = React.useRef(null);

    // console.log('New Arrival from mobile view', newArrival)

	// const nextSlide = () => {
	// 	if (slideIndex !== newArrival.length) {
	// 		setSlideIndex(slideIndex + 1);
	// 	} else if (slideIndex === newArrival.length) {
	// 		setSlideIndex(1);
	// 	}
	// };

	// const prevSlide = () => {
	// 	if (slideIndex !== 1) {
	// 		setSlideIndex(slideIndex - 1);
	// 	} else if (slideIndex === 1) {
	// 		setSlideIndex(newArrival.length);
	// 	}
	// };

	function resetTimeout() {
	  if (timeoutRef.current) {
		clearTimeout(timeoutRef.current);
	  }
	}

	useEffect(() => {
		resetTimeout();
		timeoutRef.current = setTimeout(() => {
			if (slideIndex !== newArrival.length) {
				setSlideIndex(slideIndex + 1);
			} else if (slideIndex === newArrival.length) {
				setSlideIndex(1);
			}}, 3000 );
		return () => {
		  resetTimeout();
		};
	});


	const moveDot = (index) => {
		setSlideIndex(index);
	};

	return (
        <div>
        <div className='lg:hidden relative'>
			{newArrival.map((item, index) => {
				return (
					<div key={index} className={`w-full flex flex-col justify-center items-center gap-4 p-10 border border-gray rounded-2xl absolute opacity-0 transition-all ease-in-out ${slideIndex === index + 1 ? 'opacity-100' : 'opacity-0'}`}>
						<div className='w-full h-[250px] bg-gray relative'>
                            <span className='bg-primary rounded-full p-2 absolute right-3 top-3'>New</span>
                        </div>
                        <h4>{item.name}</h4>
                        <span className='text-primary'>${item.price}</span>
					</div>
				);
			})}
</div>
			{/* <ButtonSlider moveSlide={prevSlide} direction={'prev'} />
            <ButtonSlider moveSlide={nextSlide} direction={'next'} /> */}

			<div className="flex absolute -bottom-[450px] left-[40%]">
				{Array.from({ length: newArrival.length }).map((item, index) => (
					<div key={index} onClick={() => moveDot(index + 1)} className={`h-2 mx-1 w-2 rounded-full ${slideIndex === index + 1 ? 'bg-primary' : 'bg-[#F4F5F8]'}`}/>
				))}
			</div>
		
        </div>
	);
}

export default NewArrivalSlider