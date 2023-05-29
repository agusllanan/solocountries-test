import { useHandleSearch } from '@hooks/useHandleSearch';
import { IonIcon } from '@ionic/react';
import { caretDownOutline, searchOutline } from 'ionicons/icons';

const Bar = () => {
  const { handleSearch, handleKeyPress, setSearchTerm } = useHandleSearch();

  return (
    <div className='container w-full h-[73px] flex justify-center items-center  rounded-full shadow-2xl opacity-[90%]'>
      <div className='w-[278px] h-[73px] flex justify-center items-center rounded-l-[50px] bg-white'>
        <div className='flex justify-center'>
          <div>
            <div className='dropdown relative'>
              <button
                className='dropdown-toggle transition duration-150 ease-in-out items-center whitespace-nowrap container w-[188px] flex justify-around'
                type='button'
                id='dropdownMenuButton1'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                <p className="font-['Poppins'] not-italic font-medium text-[18px] leading-[27px] text-[#50555c]">
                  Compra
                </p>

                <IonIcon icon={caretDownOutline} />
              </button>
              <ul
                className='dropdown-menu min-w-max absolute  bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none w-[188px]'
                aria-labelledby='dropdownMenuButton1'
              >
                <li>
                  <a
                    className='dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100'
                    href='#'
                  >
                    1
                  </a>
                </li>
                <li>
                  <a
                    className='dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100'
                    href='#'
                  >
                    2
                  </a>
                </li>
                <li>
                  <a
                    className='dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100'
                    href='#'
                  >
                    3
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className='h-[57px] w-[0.5px] bg-[#d0d0d0]'></div>
      <div className='w-[278px] h-[73px] bg-white flex justify-center items-center'>
        <div className='flex justify-center'>
          <div>
            <div className='dropdown relative'>
              <button
                className='dropdown-toggle transition duration-150 ease-in-out items-center whitespace-nowrap container w-[188px] flex justify-around'
                type='button'
                id='dropdownMenuButton1'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                <p className="font-['Poppins'] not-italic font-medium text-[18px] leading-[27px] text-[#50555C]">
                  Departamento
                </p>

                <IonIcon icon={caretDownOutline} />
              </button>
              <ul
                className='dropdown-menu min-w-max absolute  bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none w-[188px]'
                aria-labelledby='dropdownMenuButton1'
              >
                <li>
                  <a
                    className='dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100'
                    href='#'
                  >
                    1
                  </a>
                </li>
                <li>
                  <a
                    className='dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100'
                    href='#'
                  >
                    2
                  </a>
                </li>
                <li>
                  <a
                    className='dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100'
                    href='#'
                  >
                    3
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='h-[57px] w-[0.5px] bg-[#d0d0d0]'></div>
      <div className='h-[73px] w-[718px] flex items-center rounded-r-[50px] relative'>
        <input
          type='input'
          className='px-[26px] py-1.5 text-base font-normal bg-white focus:outline-none h-[73px] w-[659px] rounded-r-full '
          placeholder='Ingresá la ubicacion o alguna característica de tu interés...'
          aria-label='Search'
          aria-describedby='button-addon2'
          onKeyUp={handleKeyPress}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className='btn text-[40px] bg-[#2A4496] text-[#ffffff] h-[73px] w-[121px] rounded-[50px] absolute right-[0px] flex items-center justify-center'
          type='button'
          id='button-addon2'
          onClick={handleSearch}
        >
          <IonIcon icon={searchOutline} />
        </button>
      </div>
    </div>
  );
};

export default Bar;
