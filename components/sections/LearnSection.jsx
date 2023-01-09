import React from 'react';
import Wrapper from '../ui/Wrapper';
import Card from '../ui/Card';

const LearnSection = () => {
  return (
<Wrapper styles=' w-full flex flex-col items-center my-6'>
    <h1 className='text-4xl font-medium'>Learn more about our portfolio</h1>
    <div className='grid lg:grid-cols-4 gap-8'>
    {
        [
            {
                image:'https://www.materna.com/SharedDocs/Bilder/DE/610x343/AS-388785133-Home-Portfolio-Cloud.png;jsessionid=E570E5FFA29DEF3885B18C07420629F4.delivery2-master?__blob=normal&v=8',
                title:"We accompany your Journey2Cloud",
                description:"We analyze your application landscapes and transfer them step by step into a sustainable model."
            },
            {
                image:'https://www.materna.com/SharedDocs/Bilder/DE/610x343/AS-388785133-Home-Portfolio-Cloud.png;jsessionid=E570E5FFA29DEF3885B18C07420629F4.delivery2-master?__blob=normal&v=8',
                title:"We accompany your Journey2Cloud",
                description:"We analyze your application landscapes and transfer them step by step into a sustainable model."
            },
            {
                image:'https://www.materna.com/SharedDocs/Bilder/DE/610x343/AS-388785133-Home-Portfolio-Cloud.png;jsessionid=E570E5FFA29DEF3885B18C07420629F4.delivery2-master?__blob=normal&v=8',
                title:"We accompany your Journey2Cloud",
                description:"We analyze your application landscapes and transfer them step by step into a sustainable model."
            },
            {
                image:'https://www.materna.com/SharedDocs/Bilder/DE/610x343/AS-388785133-Home-Portfolio-Cloud.png;jsessionid=E570E5FFA29DEF3885B18C07420629F4.delivery2-master?__blob=normal&v=8',
                title:"We accompany your Journey2Cloud",
                description:"We analyze your application landscapes and transfer them step by step into a sustainable model."
            },
        ].map((item,index)=><Card key={index} {...item}/>)
    }
    </div>
</Wrapper>
  )
}

export default LearnSection