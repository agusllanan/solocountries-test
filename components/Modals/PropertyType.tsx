const PropertyType = () => {
  return (
    <div className=''>
      <div className='w-[200px] h-[220px] bg-[#F6F7F8] cardShade rounded-sm z-[100] absolute'>
        <div className='grid grid-rows-6 p-[15px] w-full h-full font-nunito text-[12px]'>
          <p className='text-[#22262A]'>Casa</p>
          <p className='text-[#22262A]'>Departamento</p>
          <p className='text-[#22262A]'>Oficina</p>
          <p className='text-[#22262A]'>Cochera</p>
          <p className='text-[#22262A]'>PH Terreno</p>
          <div className='grid grid-cols-2'>
            <p className='rounded-full bg-[#2A4496] font-bold flex flex-wrap justify-center items-center text-white'>
              Aplicar
            </p>
            <p className='rounded-full text-[#2A4496] font-bold flex flex-wrap justify-center items-center'>
              Borrar filtros
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyType;
