import React from 'react';
import igIcon from '../../public/icons/instagram.svg';
import fbIcon from '../../public/icons/facebook.svg';
import Image from 'next/image';

const SocialIcons = () => {
  return (
    <div className='text-white'>
      <h1 className='mb-2 font-work text-gray-900'>Seguinos</h1>
      <Image
        className='w-[30px] h-[30px] ml-0 cursor-pointer inline-flex items-center
        rounded-full mr-1.5 text-xl hover:text-gray-100
        duration-300 '
        src={igIcon}
        alt='instagram'
      />
      <Image
        className='w-[30px] h-[30px] m-0 cursor-pointer inline-flex items-center
        rounded-full mx-1.5 text-xl hover:text-gray-100
        duration-300 '
        src={fbIcon}
        alt='facebook'
      />
    </div>
  );
};

export default SocialIcons;
