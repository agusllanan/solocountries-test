import { IonIcon } from '@ionic/react';
import { arrowForwardOutline } from 'ionicons/icons';
const Contact = () => {
  return (
    <div className='md:flex md:justify-center md:items-center sm:px-12 bg-[#ffffff19] py-7 lg:py-[60px]'>
      <h1
        className='lg:text-[23px] text-xl md:mb-0 mb-6 lg:leading-normal font-work font-[700]
         md:w-1/2'
      >
        <span className='text-[#22262A]'>
          Recibí nuestras novedades sobre el mercado inmobiliario de los
          countries y barrios cerrados.
        </span>
      </h1>
      <div className='lg:w-1/2 lg:pl-[5%]'>
        <div className='container w-full h-[73px] flex justify-center items-center opacity-[90%] mobileUnjustify'>
          <div className='h-[73px] w-[718px] flex items-center rounded-r-[50px] relative'>
            <input
              type='input'
              className='px-[26px] py-1.5 font-poppins font-medium focus:outline-none h-[73px] w-[100%] rounded-full bg-[#F6F7F8] '
              placeholder='Ingresá tu Email'
              aria-label='Search'
              aria-describedby='button-addon2'
            />
            <button
              className='btn text-[40px] bg-[#2A4496] text-[#ffffff] h-[73px] w-[75px] rounded-full lg:w-[121px] lg:rounded-[50px] absolute right-[0px] flex items-center justify-center'
              type='button'
              id='button-addon2'
            >
              <IonIcon icon={arrowForwardOutline} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
