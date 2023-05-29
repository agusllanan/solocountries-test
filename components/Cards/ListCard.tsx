'use client';
import ImageSlider from '../ImageSlider';

const ListCard = () => {
  return (
    <div className='flex justify-center content-center items-center h-[100%]'>
      <div className='bg-[#f6f7f8] w-[87vw] h-[300px] cardShade rounded-[10px] mb-3 flex flex-row items-start justify-between'>
        <div className='w-[484px] h-[500px]'>
          <ImageSlider />
        </div>
        <div className='flex flex-col h-full w-full justify-between pt-[30px] pl-[30px]'>
          <div>
            <ul className='list-none'>
              <li className='font-work not-italic font-bold text-[18px] leading-4 text-[#223263] inline-block pr-3'>
                Casa en Planta Baja con Jacuzzi Exterior en Haras del Sur II
              </li>
            </ul>
          </div>

          <div>
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

          <div>
            <ul className='list-none'>
              <li className='font-work not-italic font-bold text-xl leading-6 text-[#2B9355] pr-3 inline-block'>
                USD 1.000
              </li>
              <li className='font-poppins not-italic font-bold text-sm leading-5 text-red-400 inline-block'>
                24%
              </li>
            </ul>
          </div>

          <div className='text-[#223263] text-[10px] font-nunito font-normal leading-[18px]'>
            <h1>
              Muy buena casa en 2 plantas de 350 m2 sobre lote de 2.050 m2
            </h1>
          </div>

          <div className='text-[#223263] text-[10px] font-nunito font-normal leading-[18px]'>
            <h1>
              Planta Baja: Hall, Toilette, Living y Comedor, Cocina abierta,
              Family, Lavadero y Dependencias.
            </h1>
          </div>

          <div className='text-[#223263] text-[10px] font-nunito font-normal leading-[18px]'>
            <h1>
              Planta Alta: Suite principal con vestidor y Baño, 1 Suite junior,
              2 Dormitorios con 1 baño completo.
            </h1>
          </div>

          <div className='w-full flex flex-row justify-between'>
            <button className='bg-blue-800 w-20 h-8 rounded-full'>
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
    </div>
  );
};

export default ListCard;
