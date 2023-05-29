import Item from './Item';
import { ENVENTA, ALQUILER, EMPEZA } from '../../constants';
import logo from '../../public/icons/logo.svg';
import igIcon from '../../public/icons/instagram.svg';
import fbIcon from '../../public/icons/facebook.svg';
import SocialIcons from './SocialIcons';

import { IonIcon } from '@ionic/react';
import { caretDownOutline } from 'ionicons/icons';
import Image from 'next/image';

const ItemsContainer = () => {
  return (
    <div>
      <div className='hidden sm:flex'>
        <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 border-b-white border-b-[1px] xPaddingOut sm:px-8 px-5 py-16 w-5/6  mx-auto'>
          <ul className='marginPusher'>
            <Image
              src={logo}
              className='w-[150px]'
              alt='This is a default alt text'
            />
            <li>
              <a
                className='font-poppins text-gray-900 hover:text-teal-400 duration-300
                      text-xs cursor-pointer'
              >
                <br />
                <br />
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the standard dummy text
                ever.Since the 1500s, when an unknown printer.
              </a>
            </li>
          </ul>
          <Item Links={ENVENTA} title='En venta' />
          <Item Links={ALQUILER} title='En alquiler' />
          <Item Links={EMPEZA} title='Empezá' />
          <SocialIcons />
        </div>
      </div>
      <div className='flex: sm:hidden'>
        <ul className='marginPusher mt-[40px]'>
          <Image
            src={logo}
            className='w-[150px]'
            alt=' This is a default alt text'
          />
          <li>
            <a
              className='font-poppins text-gray-900 hover:text-teal-400 duration-300
                        text-xs cursor-pointer'
            >
              <br />
              <br />
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the standard dummy text ever.Since
              the 1500s, when an unknown printer.
            </a>
          </li>
        </ul>
        <div>
          <div
            id='accordion-flush'
            data-accordion='collapse'
            className='my-8'
            data-active-classes='bg-blue-200 text-gray-900'
            data-inactive-classes='text-gray-900'
          >
            <h2 id='accordion-flush-heading-1'>
              <button
                type='button'
                className='flex items-center justify-between w-full py-3 font-poppins font-semibold text-left text-gray-900 border-b border-white'
                data-accordion-target='#accordion-flush-body-1'
                aria-expanded='false'
                aria-controls='accordion-flush-body-1'
              >
                <span>En venta</span>
                <IonIcon icon={caretDownOutline} />
              </button>
            </h2>
            <div
              id='accordion-flush-body-1'
              className='hidden'
              aria-labelledby='accordion-flush-heading-1'
            >
              <div className='py-5 font-light border-b border-gray-200 dark:border-gray-700'>
                <p className='mb-2 text-gray-500 dark:text-gray-400'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                </p>
              </div>
            </div>
            <h2 id='accordion-flush-heading-2'>
              <button
                type='button'
                className='flex items-center justify-between w-full py-3 font-poppins font-semibold text-left text-gray-900 border-b border-white'
                data-accordion-target='#accordion-flush-body-2'
                aria-expanded='false'
                aria-controls='accordion-flush-body-2'
              >
                <span>En alquiler</span>
                <IonIcon icon={caretDownOutline} />
              </button>
            </h2>
            <div
              id='accordion-flush-body-2'
              className='hidden'
              aria-labelledby='accordion-flush-heading-2'
            >
              <div className='py-5 font-light border-b border-gray-200 dark:border-gray-700'>
                <p className='mb-2 text-gray-500 dark:text-gray-400'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                </p>{' '}
              </div>
            </div>
            <h2 id='accordion-flush-heading-3'>
              <button
                type='button'
                className='flex items-center justify-between w-full py-3 font-poppins font-semibold text-left text-gray-900 border-b border-white'
                data-accordion-target='#accordion-flush-body-3'
                aria-expanded='false'
                aria-controls='accordion-flush-body-3'
              >
                <span>Empezá</span>
                <IonIcon icon={caretDownOutline} />
              </button>
            </h2>
            <div
              id='accordion-flush-body-3'
              className='hidden'
              aria-labelledby='accordion-flush-heading-3'
            >
              <div className='py-5 font-light border-b border-gray-200 dark:border-gray-700'>
                <p className='mb-2 text-gray-500 dark:text-gray-400'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                </p>
              </div>
            </div>
            <h2 id='accordion-flush-heading-4'>
              <button
                type='button'
                className='flex items-center justify-between w-full py-3 font-poppins font-semibold text-left text-gray-900 border-b border-white'
                data-accordion-target='#accordion-flush-body-4'
                aria-expanded='false'
                aria-controls='accordion-flush-body-4'
              >
                <span>Seguinos</span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <Image
                  className='w-[40px] h-[40px] ml-0 cursor-pointer inline-flex items-center
                        rounded-full mr-1.5 text-xl hover:text-gray-100
                        duration-300 '
                  src={igIcon}
                  alt='instagram'
                />
                <Image
                  className='w-[40px] h-[40px] m-0 cursor-pointer inline-flex items-center
                        rounded-full mx-1.5 text-xl hover:text-gray-100
                        duration-300 '
                  src={fbIcon}
                  alt='facebook'
                />
              </button>
            </h2>
            <div
              id='accordion-flush-body-4'
              className='hidden'
              aria-labelledby='accordion-flush-heading-4'
            >
              <div className='py-5 font-light border-b border-gray-200 dark:border-gray-700'>
                <p className='mb-2 text-gray-500 dark:text-gray-400'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemsContainer;
