import Image from 'next/image'
import searchError from '../../public/assets/icons/search-error.svg'

const ProductNotFound = () => {
  return (
    <div className='flex flex-col items-center gap-5 text-colorBold w-[60%] mx-auto text-center my-32'>
        <Image src={searchError} alt=''/>
        <h1 className='text-5xl font-semibold'>Oops, sorry!</h1>
        <p>The product you are looking for is currently unavailable or try to search using other keywords</p>
    </div>
  )
}

export default ProductNotFound