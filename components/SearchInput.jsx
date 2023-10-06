import Image from 'next/image'
import searchIcon from '../public/assets/icons/search.svg'

const SearchInput = () => {
  return (
    <div className='flex rounded-lg w-[500px] text-center' style={{background:'rgba(208, 208, 210, 0.25)'}}>
        <input type="text" placeholder='Search here' className='w-[95%] z-10 outline-none rounded-l-lg bg-gray px-2'/>
        <Image src={searchIcon} alt="Search Icon" width={50} height={50} className='bg-primary p-3 rounded-r-lg cursor-pointer' />
        <div className='bg-[#35359f] px-4 py-4 w-24 rounded-lg cursor-pointer text-[#fff]'>Search</div>
    </div>
  )
}

export default SearchInput