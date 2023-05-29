import Image from 'next/image';
import React, { useState } from 'react';
import arrowDown from '@public/icons/arrowdown.svg';
import filter from '@public/icons/filter.svg';
import squares from '@public/icons/squares.svg';
import list from '@public/icons/list.svg';
import ubi from '@public/icons/ubi.svg';
import { ViewComponentState, Props } from '../../types/filter';
import PropertyType from '@components/Modals/PropertyType';
import Price from '@components/Modals/Price';
import Meters from '@components/Modals/Meters';
import Ambients from '@components/Modals/Ambients';

const Filters = ({ view, setView, filters, setFilters }: Props) => {
  const [viewComponent, setViewComponent] = useState<ViewComponentState>({
    propertyType: false,
    price: false,
    covered_area: false,
    bathrooms: false,
    bedrooms: false,
  });

  const handleOptionClick = (optionName: keyof ViewComponentState): void => {
    setViewComponent((prevState) => {
      const newState: ViewComponentState = {
        propertyType: false,
        price: false,
        covered_area: false,
        bathrooms: false,
        bedrooms: false,
      };

      newState[optionName] = !prevState[optionName];
      return newState;
    });
  };

  const handleToggleView = () => {
    setView((prevMode) => (prevMode === 'list' ? 'grid' : 'list'));
  };

  return (
    <ul className='items-start flex flex-col lg:flex-row w-[80vw] lg:w-[80vw] lg:items-center justify-evenly mx-auto my-[36px]'>
      <li className='w-[179px] text-[34px] h-[40px]  flex flex-row items-center justify-start  text-[#22262A] font-work'>
        <p>En venta</p>
      </li>
      <li className='w-[180px] text-[14px] h-[40px]  hidden sm:flex flex-row items-center justify-evenly  text-[#22262A] bg-[#F6F7F8] rounded-full font-nunito boxBorder relative'>
        <p
          className='cursor-pointer'
          onClick={() => handleOptionClick('propertyType')}
        >
          Tipo de propiedad
        </p>
        <Image
          src={arrowDown}
          className='h-[9px] w-[13px] relative cursor-pointer'
          width={13}
          height={9}
          alt='arrow down'
          onClick={() => handleOptionClick('propertyType')}
        />
        {viewComponent.propertyType && <PropertyType />}
      </li>
      <li className='w-[89px] text-[14px] h-[40px]  hidden sm:flex flex-row items-center justify-evenly  text-[#22262A] bg-[#F6F7F8] rounded-full font-nunito boxBorder'>
        <p
          className='cursor-pointer'
          onClick={() => handleOptionClick('price')}
        >
          Precio
        </p>
        <Image
          src={arrowDown}
          className='h-[9px] w-[13px] relative cursor-pointer'
          width={13}
          height={9}
          alt='arrow down'
          onClick={() => handleOptionClick('price')}
        />
        {viewComponent.price && <Price />}
      </li>
      <li className='w-[89px] text-[14px] h-[40px]  hidden sm:flex flex-row items-center justify-evenly  text-[#22262A] bg-[#F6F7F8] rounded-full font-nunito boxBorder'>
        <p
          className='cursor-pointer'
          onClick={() => handleOptionClick('covered_area')}
        >
          Metros
        </p>
        <Image
          src={arrowDown}
          className='h-[9px] w-[13px] relative cursor-pointer'
          width={13}
          height={9}
          alt='arrow down'
          onClick={() => handleOptionClick('covered_area')}
        />
        {viewComponent.covered_area && <Meters />}
      </li>
      <li className='w-[100px] text-[14px] h-[40px]  hidden sm:flex flex-row items-center justify-evenly  text-[#22262A] bg-[#F6F7F8] rounded-full font-nunito boxBorder cursor-pointer'>
        <p
          className='cursor-pointer'
          onClick={() => handleOptionClick('bedrooms')}
        >
          Ambientes
        </p>
        <Image
          src={arrowDown}
          className='h-[9px] w-[13px] relative cursor-pointer'
          width={13}
          height={9}
          alt='arrow down'
          onClick={() => handleOptionClick('bedrooms')}
        />
        {viewComponent.bedrooms && <Ambients />}
      </li>
      <li className='w-[89px] text-[14px] h-[40px]  hidden sm:flex flex-row items-center justify-evenly  text-[#22262A] bg-[#F6F7F8] rounded-full font-nunito boxBorder cursor-pointer'>
        <p
          className='cursor-pointer'
          onClick={() => handleOptionClick('bathrooms')}
        >
          Baños
        </p>
        <Image
          src={arrowDown}
          className='h-[9px] w-[13px] relative cursor-pointer'
          width={13}
          height={9}
          alt='arrow down'
          onClick={() => handleOptionClick('bathrooms')}
        />
        {viewComponent.bathrooms && <Ambients />}
      </li>
      <li className='w-[140px] text-[14px] h-[40px] hidden sm:flex flex-row items-center justify-evenly  text-[#22262A] font-nunito'>
        <Image src={filter} alt='filter' width={25} height={9} />
        <p>Todos los filtros</p>
      </li>
      <div className='flex flex-row'>
        <li className='w-[140px] text-[14px] h-[40px] flex flex-row items-center justify-start lg:justify-evenly  text-[#22262A] font-nunito lg:hidden'>
          <Image src={filter} alt='filter' width={13} height={9} />
          <p>Ver filtros</p>
        </li>
        <li className='w-[89px] text-[14px] h-[40px]  hidden sm:flex flex-row items-center justify-evenly  text-[#22262A] font-nunito'>
          <div
            className='flex flex-row items-center space-x-1'
            onClick={handleToggleView}
          >
            <p>Vista</p>
            <Image
              src={squares}
              alt='squares'
              width={20}
              height={9}
              className={
                view === 'list'
                  ? 'cursor-pointer text-gray-300'
                  : 'text-[#2A4496]'
              }
            />
            <Image
              src={list}
              alt='list'
              width={13}
              height={9}
              className={
                view === 'grid'
                  ? 'cursor-pointer text-gray-300'
                  : 'text-[#2A4496]'
              }
            />
          </div>
        </li>
        <li className='w-[89px] text-[14px] h-[40px]  flex flex-row items-center justify-evenly text-[#22262A] font-nunito'>
          <Image src={ubi} alt='ubi' width={25} height={9} />
          <a href='#'>Ver mapa</a>
        </li>
      </div>
    </ul>
  );
};

export default Filters;
