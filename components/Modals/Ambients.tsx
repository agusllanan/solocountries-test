const Ambients = () => {
  return (
    <div>
      <div className='w-[200px] h-[140px] bg-[#F6F7F8] cardShade rounded-sm absolute z-[100]'>
        <div className='flex flex-col justify-between p-[15px] w-full h-full font-nunito text-[12px]'>
          <div className='grid grid-cols-5 grid-rows-2 text-center gap-y-5 items-center'>
            <p className='flex flex-wrap justify-center items-center rounded-full w-[25px] h-[25px] bg-white cardShade'>
              1
            </p>
            <p className='flex flex-wrap justify-center items-center rounded-full w-[25px] h-[25px] bg-white cardShade'>
              2
            </p>
            <p className='flex flex-wrap justify-center items-center rounded-full w-[25px] h-[25px] bg-white cardShade'>
              3
            </p>
            <p className='flex flex-wrap justify-center items-center rounded-full w-[25px] h-[25px] bg-white cardShade'>
              4
            </p>
            <p className='flex flex-wrap justify-center items-center rounded-full w-[25px] h-[25px] bg-white cardShade'>
              5
            </p>
            <p className='flex flex-wrap justify-center items-center rounded-full w-[25px] h-[25px] bg-white cardShade'>
              6
            </p>
          </div>
          <div className='grid grid-cols-2 h-[25px] mt-[25px]'>
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

export default Ambients;
