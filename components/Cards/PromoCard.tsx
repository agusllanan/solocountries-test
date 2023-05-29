const PromoCard = () => {
  return (
    <div className='promoCardShade'>
      <div
        className='my-[10px] lg:my-[30px] panels w-[410px] h-[294px]  bg-center bg-cover rounded-l-[20px] rounded-tr-[65px] rounded-tl-3xl relative sm: promoCardShrink'
        style={{ backgroundImage: `url("/images/housetest1.jpg")` }}
      >
        <div className='rounded-tr-[65px] rounded-tl-3xl panels w-[410px] h-[294px] inset-0 bg-gradient-to-b from-white via-transparent to-transparent sm: promoCardShrink'>
          <div className='relative z-40 left-3 top-3'>
            <p className="font-['Work_Sans'] not-italic font-bold text-[20px] leading-[23px] text-[#2A4496]">
              Deptos en <br />
              <span className='text-[34px] leading-[40px]'>NORDELTA</span>
            </p>
          </div>
          <div className='w-[244px] h-[94px] bg-[#2B9355] rounded-tl-[50px] absolute bottom-0 right-0 flex justify-center items-center'>
            <p className="font-['Work_Sans'] not-italic font-bold text-[20px] leading-[23px] text-[#fff] text-right tracking-[0.02em]">
              desde <br />
              USD
              <span className="font-['Poppins'] font-bold text-[30px] leading-[110%] tracking-[0.5px]">
                2.700
              </span>
              x m2
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoCard;
