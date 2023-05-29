import Image from 'next/image';

const PlanCard = () => {
  return (
    <div className='flex justify-center content-center items-center h-[100%] lg:w-[1220px]'>
      <div className='bg-[#f6f7f8] w-[300px] h-[384px] cardShade rounded-[10px] mb-3 flex flex-col items-start justify-between lg:w-full lg:flex-row lg:h-[100px]'>
        <div className='flex flex-col gap-y-[20px] lg:py-[20px] lg:gap-y-[10px]'>
          <div className='font-work not-italic font-bold text-[21px] leading-6 text-[#33A0FF] pr-3 mx-4 inline-block pt-[40px] lg:pt-0'>
            Tu primer aviso
          </div>
          <div className='font-work not-italic font-bold text-[35px] leading-6 text-[#2B9355] pr-3 mx-4 inline-block'>
            $ 1500 x mes
          </div>
        </div>
        <div className='h-[120px] w-[120px] ml-[56.35vw] mt-[-8.25vw] lg:ml-[19vw] lg:mt-[-1.25vw] lg:h-[140px] lg:w-[140px] absolute rounded-full bg-[#33A0FF]'>
          <div className='grid justify-center items-end h-[40%] w-[100%]'>
            <Image
              src='../../public/icons/smile.svg'
              alt='This is an default alt'
            />
          </div>
          <div className='grid justify-center h-[60%] w-[100%]'>
            <p className='text-white font-work text-2xl	text-center leading-6'>
              1 mes gratis
            </p>
          </div>
        </div>

        <div className='lg:grid lg:grid-rows-2 lg:grid-cols-2 lg:py-[20px] lg:ml-[80px]'>
          <div className='w-[90%] text-[#223263] font-xs font-nunito font-normal leading-[18px] mx-4 border-b-[#E3E3E3] border-b-[1px] pb-[5px]  pt-[5px] flex flex-row'>
            <Image
              src='../../public/icons/bluecheckmark.svg'
              className='h-[20px] w-[20px] mr-[5px] justify-end'
              alt='This is an default alt'
            />
            <h1 className='card-title-text justify-end'>
              Renovación automática por més
            </h1>
          </div>

          <div className='w-[90%] text-[#223263] font-xs font-nunito font-normal leading-[18px] mx-4 border-b-[#E3E3E3] border-b-[1px] pb-[5px]  pt-[5px] flex flex-row'>
            <Image
              src='../../public/icons/bluecheckmark.svg'
              className='h-[20px] w-[20px] mr-[5px] justify-end'
              alt='This is an default alt'
            />
            <h1 className='card-title-text justify-end'>
              Modificá tu aviso sin límites
            </h1>
          </div>

          <div className='w-[90%] text-[#223263] font-xs font-nunito font-normal leading-[18px] mx-4 border-b-[#E3E3E3] border-b-[1px] pb-[5px]  pt-[5px] flex flex-row'>
            <Image
              src='../../public/icons/bluecheckmark.svg'
              className='h-[20px] w-[20px] mr-[5px] justify-end'
              alt='This is an default alt'
            />
            <h1 className='card-title-text justify-end'>
              Visibilidad estándar
            </h1>
          </div>

          <div className='w-[90%] text-[#223263] font-xs font-nunito font-normal leading-[18px] mx-4 border-b-[#E3E3E3] border-b-[1px] pb-[5px]  pt-[5px] flex flex-row'>
            <Image
              src='../../public/icons/bluecheckmark.svg'
              className='h-[20px] w-[20px] mr-[5px] justify-end'
              alt='This is an default alt'
            />
            <h1 className='card-title-text justify-end'>Ayuda</h1>
          </div>
        </div>

        <div className='w-full flex flex-row justify-end lg:w-48 lg:h-full lg:content-end lg:flex lg:flex-wrap'>
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

export default PlanCard;
