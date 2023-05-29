import Image from 'next/image';
import { IonIcon } from '@ionic/react';
import { caretDownOutline } from 'ionicons/icons';

const Accordion = () => {
  return (
    <div
      id='accordion-collapse'
      className='bg-white bg-opacity-80 rounded-[40px]'
      data-accordion='collapse'
    >
      <h2 id='accordion-collapse-heading-1'>
        <button
          type='button'
          className='flex items-center justify-between w-full p-5 pt-[30px] font-medium text-left text-[#50555C] border-b-[1px] border-[#DADADA] rounded-t-xl'
          data-accordion-target='#accordion-collapse-body-1'
          aria-expanded='false'
          aria-controls='accordion-collapse-body-1'
        >
          <span>Compra</span>
          <IonIcon icon={caretDownOutline} />
        </button>
      </h2>
      <div
        id='accordion-collapse-body-1'
        className='hidden'
        aria-labelledby='accordion-collapse-heading-1'
      >
        <div className='p-5 font-[#50555C] border-b-[1px] border-[#DADADA] dark:border-gray-700 dark:bg-gray-900'></div>
      </div>
      <h2 id='accordion-collapse-heading-2'>
        <button
          type='button'
          className='flex items-center justify-between w-full p-5 font-medium text-left text-[#50555C] border-b-[1px] border-[#DADADA] focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
          data-accordion-target='#accordion-collapse-body-2'
          aria-expanded='false'
          aria-controls='accordion-collapse-body-2'
        >
          <span>Departamento</span>
          <IonIcon icon={caretDownOutline} />
        </button>
      </h2>
      <div
        id='accordion-collapse-body-2'
        className='hidden'
        aria-labelledby='accordion-collapse-heading-2'
      >
        <div className='p-5 font-light border-b-[1px] border-[#DADADA] dark:border-gray-700'></div>
      </div>
      <h2 id='accordion-collapse-heading-3'>
        <button
          type='button'
          className='flex items-center justify-between w-full p-5 font-medium text-left text-[#50555C] border-b-[1px] border-[#DADADA] focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
          data-accordion-target='#accordion-collapse-body-3'
          aria-expanded='false'
          aria-controls='accordion-collapse-body-3'
        >
          <span>Ingresá acá la ubicación o alguna característica</span>
          <IonIcon icon={caretDownOutline} />
        </button>
      </h2>
      <div
        id='accordion-collapse-body-3'
        className='hidden'
        aria-labelledby='accordion-collapse-heading-3'
      >
        <div className='p-5 font-light border-t-0 border-gray-200 dark:border-gray-700'></div>
      </div>
      <h2 id='accordion-collapse-heading-4'>
        <div className='py-[20px]'>
          <a
            href='#'
            className='bg-[#2A4496] font-poppins inline-flex items-left justify-left border-x-[100px] py-3 text-base font-medium text-center text-white border border-[#2A4496] rounded-full hover:bg-[#2B9355] focus:ring-4 focus:ring-gray-100 lg:border-x-[30px]'
          >
            <Image
              src='../../public/icons/search-icon.svg'
              className='pr-[5px]'
              alt='search'
              width={20}
              height={20}
            />
            <p>Buscar</p>
          </a>
        </div>
      </h2>
    </div>
  );
};

export default Accordion;
