import Image from 'next/image'
import React from 'react'

const team = [
    {name:'Sam Alabama', role: 'Team Member', img: '' },
    {name:'Athen Kamsia', role: 'Team Member', img: '' },
    {name:'Jack Lentera', role: 'Team Member', img: '' },
    {name:'Ahmad Pucelle', role: 'Team Member', img: '' },
    
]

const Team = () => {
  return (
    <section className='flex flex-col gap-10 text-center my-20'>
        <div className='flex flex-col'>
           <h2 className='text-2xl font-semibold text-colorBold'>Our Team</h2>
            <p className='text-lg text-colorNormal'>We provide a 100% authentication assurance on all products</p> 
        </div>
        
        <div className='flex lg:flex-row flex-col justify-between gap-10'>
            {team.map((item,index) => (
              <div key={index} className='flex flex-col justify-center items-center pb-4 bg-[#FAFAFA] w-[100%] lg:w-[25%] rounded-2xl border border-[#FAFAFA]' style={{boxShadow:'0 10px 20px rgba(0, 0, 0, 0.2)'}}>
                {/* <Image src={item.img} alt={item.title} width={50} height={50}/> */}
                <div className='h-44 w-full bg-gray rounded-2xl mb-4'></div>
                <h3 className='font-medium text-lg text-colorBold'>{item.name}</h3>
                <p className='text-sm text-colorNormal'>{item.role}</p>
            </div>  
            ))}
            
        </div>
    </section>
  )
}

export default Team