import React from 'react';
import Wrapper from './Wrapper';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='bg-[#3A3E41] mt-8'>
    <Wrapper styles='text-white'>
        <div className='flex flex-col lg:flex-row justify-between'>
        <div className='flex flex-col gap-6 '>
          <h2 className='text-2xl'>Materna Information & Communications SE</h2>
         <p>Voßkuhle 37
44141 Dortmund, Germany</p>
      <Link className='flex items-center gap-6' href='+49 231 5599-00'>+49 231 5599-00 <span class="material-symbols-outlined">
call
</span></Link>
      <Link className='flex items-center gap-6' href='mailto:marketing@materna.de'>marketing@materna.de <span class="material-symbols-outlined">
mail
</span></Link>
        </div>
        <div className='flex flex-col gap-6 w-full lg:max-w-[25%]'>
   <h2 className='text-4xl'>We are social</h2>
   <ul className='flex flex-wrap gap-2'>
    {
        [
            '/assets/images/twitter.svg',
            '/assets/images/facebook.svg',
            '/assets/images/blog.svg',
            '/assets/images/site.svg',
            '/assets/images/youtube.svg',
            '/assets/images/linkedin.svg',
            '/assets/images/instagram.svg',
            '/assets/images/switch.svg',
    ].map((item,index)=><img className='bg-white bg-opacity-20' key={index} src={item} alt=''/>)
    }
   </ul>
        </div>
        </div>
        <hr className='w-full h-[2px] bg-red-500 my-6' />
        <div className='grid lg:grid-cols-6 gap-8'>
            
            
            <div className='flex flex-col gap-8'>
            <h1 className='text-2xl font-medium'>Portifolio</h1>
            <ul className='hidden lg:flex flex-col gap-4'>
                
                {
                    [
                        { title: 'Focus Areas', link: 'focus' },
                        { title: 'Competencies', link: 'competencies' },
                        { title: 'Technologies', link: 'technologies' },
                        { title: 'Industries', link: 'industries' }
                      ].map((item,index)=><li key={index}><Link href={item.link}>{item.title}</Link></li>)
                }
            </ul></div>
            <div className='flex flex-col gap-8'>
            <h1 className='text-2xl font-medium'>About us</h1>
            <ul className='hidden lg:flex flex-col gap-4'>
                
                {
                  [
                    { title: 'Materna Group', link: 'materna' },
                    { title: 'Management', link: 'management' },
                    { title: 'Locations', link: 'locations' },
                    { title: 'Partners', link: 'partners' },
                    { title: 'CSR', link: 'csr' },
                    {
                      title: 'Research and Development',
                      link: 'research'
                    }
                  ].map((item,index)=><li key={index}><Link href={item.link}>{item.title}</Link></li>)
                }
            </ul></div>
            <div className='flex flex-col gap-8'>
            <h1 className='text-2xl font-medium'>Customers</h1>
            <ul className='hidden lg:flex flex-col gap-4'>
                
                {
                  [ { title: 'Customers', link: 'customers' } ].map((item,index)=><li key={index}><Link href={item.link}>{item.title}</Link></li>)
                }
            </ul></div>
            <div className='flex flex-col gap-8'>
            <h1 className='text-2xl font-medium'>Careers</h1>
            <ul className='hidden lg:flex flex-col gap-4'>
                
                {
                  [ { title: 'Careers', link: 'Careers' } ].map((item,index)=><li key={index}><Link href={item.link}>{item.title}</Link></li>)
                }
            </ul></div>
            <div className='flex flex-col gap-8'>
            <h1 className='text-2xl font-medium'>Services</h1>
            <ul className='hidden lg:flex flex-col gap-4'>
                
                {
                  [
                    { title: 'Materna Support', link: 'materna' },
                    { title: 'Contact', link: 'contact' },
                    { title: 'Imprint  Copyright', link: 'imprint' },
                    { title: 'Data privacy statement', link: 'data' },
                    {
                      title: 'Data privacy information for customers',
                      link: 'data'
                    },
                    {
                      title: 'Data privacy information for suppliers',
                      link: 'data'
                    },
                    { title: 'Sitemap', link: 'sitemap' }
                  ].map((item,index)=><li key={index}><Link href={item.link}>{item.title}</Link></li>)
                }
            </ul></div>
            <div className='flex flex-col gap-8'>
            <h1 className='text-2xl font-medium'>Events</h1>
            <ul className='hidden lg:flex flex-col gap-4'>
                
                {
                  [ { title: 'Events', link: 'Events' } ].map((item,index)=><li key={index}><Link href={item.link}>{item.title}</Link></li>)
                }
            </ul></div>

        </div>
    </Wrapper></div>
  )
}

export default Footer