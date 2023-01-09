import React from 'react';
import Wrapper from '../ui/Wrapper';

const GallerySection = () => {
  return (
    <Wrapper>
        <div className="grid lg:grid-cols-4 gap-4 ">
            {[
              '/assets/images/galery1.png',
              '/assets/images/galery2.jpg',
              '/assets/images/galery3.jpg',
              '/assets/images/galery4.jpg',
            ].map((item,index)=><div key={index} className='relative'><img src={item} alt="" /> <span class={`material-symbols-outlined absolute top-3 left-3 text-white bg-red-500 ${index==0&&'bg-gray-500'}`}>
            expand_less
            </span></div>)}
        </div>
    </Wrapper>
  )
}

export default GallerySection