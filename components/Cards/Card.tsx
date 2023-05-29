import Image from 'next/image';
import houseImage1 from '@public/images/housetest1.jpg';

const Card = () => {
  // Card tiene que recibir información para renderizar los datos, además debe pasar el id por route
  const handleOpenNewTab = () => {
    window.open('/product-detail', '_blank');
  };

  return (
    <div
      className='flex justify-center content-center items-center h-[100%] cursor-pointer'
      onClick={handleOpenNewTab}
    >
      <div className='bg-[#f6f7f8] w-[300px] h-[384px] cardShade rounded-[10px] mb-3 flex flex-col items-start justify-between'>
        <div
          id='carouselExampleIndicators'
          className='carousel slide relative'
          data-bs-ride='carousel'
        >
          <div className='carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4'>
            <button
              type='button'
              data-bs-target='#carouselExampleIndicators'
              data-bs-slide-to='0'
              className='active'
              aria-current='true'
              aria-label='Slide 1'
            ></button>
            <button
              type='button'
              data-bs-target='#carouselExampleIndicators'
              data-bs-slide-to='1'
              aria-label='Slide 2'
            ></button>
            <button
              type='button'
              data-bs-target='#carouselExampleIndicators'
              data-bs-slide-to='2'
              aria-label='Slide 3'
            ></button>
          </div>
          <div className='carousel-inner relative w-full overflow-hidden'>
            <div className='carousel-item active float-left w-full'>
              <Image
                src={houseImage1}
                className='block w-full card-img'
                alt='Casa'
                width={300}
                height={384}
              />
            </div>
            {/* <div className='carousel-item float-left w-full'>
              <Image
                src={houseImage2}
                className='block w-full card-img'
                alt='Casa'
                width={300}
                height={384}
              />
            </div>
            <div className='carousel-item float-left w-full'>
              <Image
                src={houseImage3}
                className='block w-full card-img'
                alt='Casa'
                width={300}
                height={384}
              />
            </div> */}
          </div>

          <button
            className='carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0'
            type='button'
            data-bs-target='#carouselExampleIndicators'
            data-bs-slide='prev'
          >
            <span
              className='inline-block bg-no-repeat'
              aria-hidden='true'
            ></span>
            <span className='visually-hidden'></span>
          </button>
          <button
            className='carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0'
            type='button'
            data-bs-target='#carouselExampleIndicators'
            data-bs-slide='next'
          >
            <span
              className='inline-block bg-no-repeat'
              aria-hidden='true'
            ></span>
            <span className='visually-hidden'></span>
          </button>
        </div>

        <div className='text-[#223263] font-nunito font-normal leading-[18px] pl-3'>
          <h1 className='card-title-text'>
            Casa en Planta Baja con Jacuzzi Exterior en Haras del Sur II
          </h1>
        </div>

        <div className='font-poppins not-italic font-bold text-xs leading-4 text-blue-800 pl-3'>
          <ul className='list-none'>
            <li className='font-poppins not-italic font-bold text-xs leading-4 text-blue-800 inline-block pr-3'>
              1000 m
            </li>
            <li className='font-poppins not-italic font-bold text-xs leading-4 text-blue-800 inline-block pr-3'>
              3 amb.
            </li>
            <li className='font-poppins not-italic font-bold text-xs leading-4 text-blue-800 inline-block pr-3'>
              3 baños
            </li>
          </ul>
        </div>

        <div className='pl-3'>
          <ul className='list-none'>
            <li className='font-work not-italic font-bold text-xl leading-6 text-[#2B9355] pr-3 inline-block'>
              USD 1.000
            </li>
            <li className='font-poppins not-italic font-bold text-sm leading-5 text-red-400 inline-block'>
              24%
            </li>
          </ul>
        </div>

        <div className='w-full flex flex-row justify-between'>
          <button className='bg-blue-800 w-20 h-12 borderLeftFix'>
            <p className='font-poppins leading-[180%] not-italic font-bold text-xs text-white'>
              VER
            </p>
          </button>
          <button className='bg-[#2B9355] w-48 h-12 borderRightFix'>
            <p className='font-poppins leading-[180%] not-italic font-bold text-lg text-white'>
              Contactar
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
