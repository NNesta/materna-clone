import React from 'react';
import Link from 'next/link';
import Wrapper from './Wrapper';

const Navbar = () => {
  return (
    <>
        <div className='hidden lg:block h-16 text-black '>
    <Wrapper styles='h-full'>
        <ul className='flex justify-end h-full items-center gap-8 '>
            
         {
            [
                { title: 'Newsroom', link: 'newsroom' },
                { title: 'Contact', link: 'contact' },
                { title: 'English', link: 'english' }
              ].map((item,index)=><li key={index}><Link href={item.link}>{item.title}</Link></li>)
         }
        </ul>

    </Wrapper>
        </div>
        <div className='flex lg:hidden gap-16  items-center w-full h-12 bg-red-500 text-white'>
          <div className='flex gap-4'>
          <span class="material-symbols-outlined">
menu
</span>
<p>Menu</p>
          </div>
          <div className='flex  items-center gap-4 '>
          <img src="/assets/images/search.svg" alt="" />
           <p>Search</p>
          </div>
        </div>
        </>
    
  )
}

export default Navbar;