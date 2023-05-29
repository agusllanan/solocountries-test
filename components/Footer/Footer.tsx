import React from 'react';
import ItemsContainer from './ItemsContainter';

const Footer = () => {
  return (
    <footer className='bg-blue-200 text-gray-900 font-poppins leading-[10px] p-6 rounded-tl-3xl'>
      <ItemsContainer />
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-[4px] text-start pt-8 text-gray-900 text-xs pb-10 w-5/6 mx-auto'>
        <span>
          © 2023 Solocountries. <br /> Todos los derechos reservados.
        </span>
        <span>Términos y Condiciones</span>
        <span>Políticas de privacidad</span>
      </div>
    </footer>
  );
};

export default Footer;
