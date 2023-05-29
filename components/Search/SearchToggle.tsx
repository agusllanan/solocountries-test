import Image from 'next/image';
import React from 'react';

const SearchToggle = () => {
  return (
    <div className='bg-[#EFF0ED] w-[140px] h-[40px] rounded-full flex flex-row px-[20px] items-center justify-between'>
      <Image
        src='../../public/icons/search-icon-blue.svg'
        alt=''
        className='w-[20px] h-[20px]'
      />
      <p className='font-poppins font-semibold text-[#2A4496]'>Buscar</p>
    </div>
  );
};

export default SearchToggle;
