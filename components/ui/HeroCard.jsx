import React from 'react'

const HeroCard = ({image,title, description}) => {
  return (
    <div className='h-full w-full border-4 border-white relative overflow-hidden'>
    <img className='object-cover' src={image} alt="" />
    <div className='absolute h-full top-[80%] hover:top-0 flex flex-col gap-6 bg-black'>
    <h1 className='bg-red-500 py-2'>{title}</h1>
    <p className='px-4'>{description}</p>
    <button className='px-4 flex justify-center items-center gap-4 self-start'>More <span class="material-symbols-outlined">
arrow_forward_ios
</span></button>
    </div>
    </div>
  )
}

export default HeroCard