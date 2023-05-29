import React from 'react';
import Bar from '../Search/Bar';
import Accordion from '../Search/Accordion';

const Hero = () => {
  return (
    <div
      className='pb-[750px] text-center font-poppins text-[#2A4496] py-24 px-6 w-full bg-cover lg:pb-[300px] h-[600px] pt-[60px]'
      style={{ backgroundImage: `url("/images/hero.png")` }}
    >
      <h1 className='text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight'>
        La vida que buscás está acá
      </h1>
      <div className='flex: sm:hidden place-content-center lg:mx-[20%] my-[4%] lg:hidden'>
        <Accordion />
      </div>
      <div className='hidden sm:flex lg:place-content-center lg:mx-[20%] lg:my-[4%]'>
        <Bar />
      </div>
    </div>
  );
};

export default Hero;
