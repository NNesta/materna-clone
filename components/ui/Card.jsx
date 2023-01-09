import React from 'react'

const Card = ({image,title,description}) => {
  return (
    <div className='flex flex-col gap-6 w-72 bg-[#E9EEF1]'>
    <img src={image} alt="" />
    <h2 className='text-red-500'>{title}</h2>
    <p>{description}</p>
    <button className='flex items-center justify-center w-20 box-border self-end bg-[#C30A17] text-white'>More <img src="/assets/images/forward.svg" alt="" /></button>
    </div>
  )
}

export default Card