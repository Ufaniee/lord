import React from 'react'
import Image from 'next/image'

const ProductHeader = () => {
  return (
    <section className='my-4'>
            <div className=" bg-[#efeff9] borders rounded-2xl ml-10" >
                <Image src="/Images/filters-applied.png" width={700} height={100}/>
                <Image src="/Images/content-top.png" width={700} height={100}/>
              </div>
        
    </section>
  )
}

export default ProductHeader