import React from 'react'

const TimingComponent = ({value, unitOfTime, className}) => (
    <div className={`${className && className} flex flex-col items-center py-1 px-4 rounded-xl border bg-[#fff] border-gray`}>
        <span className='text-primary'>{value}</span>
        <span>{unitOfTime}</span>
    </div>
)

const Timing = ({hrs, min, sec, className}) => {

  return (
    <div className='flex gap-2 my-7'>
        <TimingComponent value={hrs} unitOfTime='Hrs' className={className}/>
        <TimingComponent value={min} unitOfTime='Min' className={className}/>
        <TimingComponent value={sec} unitOfTime='Sec' className={className}/>
    </div>
  )
}

export default Timing