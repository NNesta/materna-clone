import React from 'react';
import Wrapper from '../ui/Wrapper';

const ProviderSection = () => {
  return (
    <Wrapper>
        <div className='flex flex-col lg:flex-row gap-6 items-center'>
            <img src="/assets/images/provider.png" alt="" />
         <div className=' flex flex-col gap-6'>
            <h2 className='text-4xl text-red-500'>Top position in ESM Report</h2>
            <p>Enterprise Service Management is one of the cornerstones of any company's digitization strategy. In the new ISG Provider Lens™ Report - Enterprise Service Management 2021 - Germany, Materna comes out on top in three quadrants.</p>
            <button className='flex gap-4 self-end border-2 border-red-500 px-6 py-4 my-4'>Read more<span class="material-symbols-outlined">
arrow_forward_ios
</span></button>
         </div>
        </div>
    </Wrapper>
  )
}

export default ProviderSection