import Image from 'next/image'
import leftArrow from '../../public/assets/icons/leftArrow.svg'
import rightArrow from '../../public/assets/icons/rightArrow.svg'

const ButtonSlider = ({direction, moveSlide}) => {
  return (
    <button onClick={moveSlide} className={`w-[48px] h-[48px] rounded-lg bg-[#FAFAFA] absolute hidden lg:flex justify-center items-center cursor-pointer top-[45%] ${direction === "prev" ? "left-1 " : "right-1"}`}>
		  <Image src={direction === "next" ? rightArrow : leftArrow} alt="Arrow icon" />
	  </button>
  )
}

export default ButtonSlider