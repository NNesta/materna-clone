import React from 'react';
import Wrapper from '../ui/Wrapper';

const BehindSection = () => {
  return (
    <Wrapper>
        <div className='flex flex-col'>
            <h1 className="text-4xl text-black">Materna is behind it</h1>
        <div className='flex flex-col lg:flex-row gap-6 items-center'>
            <img src="/assets/images/materna.png" alt="" />
         <div className=' flex flex-col gap-6'>
            <h2 className='text-4xl text-red-500'>Denver International Airport with automated baggage check-in</h2>
            <p>Denver International Airport has automated baggage check-in for its passengers as part of its comprehensive Great Hall redevelopment project. Materna IPS installed 86 bag drop machines and launched them in cooperation with United Airlines and Southwest Airlines - the largest self bag drop installation in the US.</p>
            <button className='flex gap-4 self-end border-2 text-white bg-red-500 px-6 py-4 my-4'>More about the self Bag drop project<span class="material-symbols-outlined">
arrow_forward_ios
</span></button>
         </div>
        </div></div>
    </Wrapper>
  )
}

export default BehindSection