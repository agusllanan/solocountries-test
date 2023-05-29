import Image from 'next/image';
import React from 'react';
import ctaImage from '@public/images/ctaimage.png';

const PromoHero = () => {
  return (
    <section className='bg-white borderFade'>
      <div className='bg-[#EFF0ED] grid px-0 py-8 mx-auto lg:gap-0 xl:gap-0 lg:py-0 lg:grid-cols-12 rounded-br-[50px]'>
        <div className='lg:mt-0 lg:col-span-6 lg:flex'>
          <Image
            src={ctaImage}
            className='flex-row relative z-[999] mt-[-50px]'
            alt='This is a default image'
            width={1000}
            height={400}
            quality={100}
          />
        </div>
        <div className='mr-auto place-self-center sm:pl-[10%] pt-[30px] lg:col-span-5 pl-[10%]'>
          <h1 className='leading-[75px] text-[#2B9355] font-poppins font-medium max-w-2xl mb-4 text-4xl tracking-tight workFont md:text-5xl xl:text-6xl dark:text-white'>
            Simple y efectivo. <br /> Creá tu aviso en <br /> sólo 2 pasos.
          </h1>
          <p className='font-poppins font-[400] text-[#2B9355] max-w-2xl mb-6  lg:mb-8 md:text-lg lg:text-xl pr-[40px] dark:text-gray-400'>
            Pensado tanto para agentes inmobiliarios como para particulares.
          </p>
          <a
            href='#'
            className='bg-[#2B9355] font-poppins inline-flex items-left justify-left border-x-[80px] py-3 text-base font-medium text-center text-white border border-[#2B9355] rounded-full hover:bg-[#2B9355] focus:ring-4 focus:ring-gray-100 lg:border-x-[30px]'
          >
            EMPEZÁ AHORA
          </a>
        </div>
      </div>
    </section>
  );
};

export default PromoHero;
