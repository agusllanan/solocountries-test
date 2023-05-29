import Image from 'next/image';
import logopropiedades from '@public/icons/logopropiedades.svg';

const ContactModal = () => {
  return (
    <div className='bg-[#F6F7F8] rounded-[10px] cardShade w-[560px] h-[440px]'>
      <div className='h-full mb-3 flex flex-row items-start justify-between'>
        <div className='flex flex-col h-full w-full justify-between pt-[30px] pl-[30px]'>
          <div className='bg-white text-[#50555C] text-[15px] font-nunito font-normal leading-[18px] rounded-[20px] cardShade px-[30px] py-[15px] mr-[30px]'>
            <p>Nombre</p>
          </div>

          <div className='bg-white text-[#50555C] text-[15px] font-nunito font-normal leading-[18px] rounded-[20px] cardShade px-[30px] py-[15px] mr-[30px]'>
            <p>Email</p>
          </div>

          <div className='bg-white text-[#50555C] text-[15px] font-nunito font-normal leading-[18px] rounded-[20px] cardShade px-[30px] py-[15px] mr-[30px]'>
            <p>Teléfono</p>
          </div>

          <div className='bg-white text-[#50555C] text-[15px] font-nunito font-normal leading-[18px] rounded-[20px] cardShade px-[30px] py-[15px] mr-[30px]'>
            <p>
              Hola, me interesa está propiedad que vi en Solocountries.com.ar y
              me gustaría que me contacten. Muchas gracias.
            </p>
          </div>

          <div className='text-[#50555C] text-[9px] font-work font-normal leading-[18px] px-[25px] py-[15px] mb-[10px] mr-[30px]'>
            <p>
              Al enviar estás aceptando los <u>Términos y Condiciones de Uso</u>{' '}
              y <u>la Política de Privacidad</u>.
            </p>
          </div>

          <div className='w-full flex flex-row justify-between'>
            <div className='mt-[20px]'>
              <Image
                src={logopropiedades}
                className='relative z-[999] mt-[-80px] ml-[7px]'
                alt='this is the logo'
                width={100}
                height={100}
              />
              <div className='font-nunito font-bold text-[9px] text-[#2B9355] ml-[26px]'>
                <u>Ver info</u>
              </div>
            </div>
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

export default ContactModal;
