import React from 'react';
import Link from 'next/link';
import Wrapper from '../ui/Wrapper';
import HeroCard from '../ui/HeroCard';

const HeroSection = () => {
  return (
    <div className='min-h-screen w-full bg-no-repeat bg-cover bg-bottom bg-[url("/assets/images/herobg.svg")]'>
        <img className='fixed bottom-32 right-4' src="/assets/images/scroll.svg" alt="" />
    <Wrapper styles='relative'>
    <div className='flex gap-4 w-full items-center absolute  top-4 lg:-top-16'>
     <img className='w-44' src="/assets/images/logo.svg" alt="" />
     <div className='hidden lg:flex justify-between items-center w-full h-10 bg-[#B91C1C]  text-white'>
        <ul className='flex items-center gap-8'>
   {
    [
        { title: 'Portfolio', link: 'portfolio' },
        { title: 'Industries', link: 'industries' },
        { title: 'Customers', link: 'customers' },
        { title: 'About us', link: 'about' },
        { title: 'Events', link: 'events' },
        { title: 'Careers', link: 'careers' },
        { title: 'Search', link: 'search' }
      ].map((item,index)=><li key={index}><Link href={item.link}>{item.title}</Link></li>)
   }</ul>
   <div className='h-10 aspect-square bg-red-700 flex items-center justify-center'>

   <img className='w-6 ' src='/assets/images/search.svg' alt=''/>
   </div>
     </div>
    </div>
    <div className='grid lg:grid-cols-5 gap-16 text-white pt-52 lg:py-32'>
      <div className='lg:col-span-2 flex flex-col gap-8 justify-center row-span-2 py-16 max-w-full border-8 border-red-500'>
        <h1 className='text-3xl md:text-4xl lg:text-5xl'>WE ARE DIGITIZING YOUR WORLD.</h1>
        <p className='text-xl'>As a key globally active IT service provider, we advise and assist you in all aspects of digitization and provide tailor-made technologies for agile, flexible and secure IT.</p>
      </div>
      {
        [
            {
                image:'/assets/images/portifolio1.jpg',
                title:'PORTIFOLIO',
                description:'We accompany you in all aspects of digitization.'
            },
            {
                image:'/assets/images/about1.jpg',
                title:'PORTIFOLIO',
                description:'We accompany you in all aspects of digitization.'
            },
            {
                image:'/assets/images/career1.jpg',
                title:'PORTIFOLIO',
                description:'We accompany you in all aspects of digitization.'
            },

        ].map((item,index)=><HeroCard key={index} {...item} />)
      }
    </div>
    </Wrapper>
    
    
    </div>
  )
}

export default HeroSection