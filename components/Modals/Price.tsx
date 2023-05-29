const Price = () => {
  return (
    <div>
      <div className='w-[200px] h-[220px] bg-[#F6F7F8] cardShade rounded-sm z-[100] absolute'>
        <div className='flex flex-col justify-between p-[15px] w-full h-full font-nunito text-[12px]'>
          <p className='text-[#22262A]'>Desde</p>
          <div className='flex flex-cols-2 justify-between items-center'>
            <p className='text-[#A1A1A1]'>USD</p>
            <div className='w-3/4 h-[30px] rounded-full bg-white cardShade'></div>
          </div>
          <p className='text-[#22262A]'>PH Terreno</p>
          <div className='flex flex-cols-2 justify-between items-center'>
            <p className='text-[#A1A1A1]'>USD</p>
            <div className='w-3/4 h-[30px] rounded-full bg-white cardShade'></div>
          </div>
          <div className='grid grid-cols-2 h-[25px] mt-[25px]'>
            <button className='rounded-full bg-[#2A4496] font-bold flex flex-wrap justify-center items-center text-white'>
              Aplicar
            </button>
            <p className='rounded-full text-[#2A4496] font-bold flex flex-wrap justify-center items-center cursor-pointer'>
              Borrar filtros
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
