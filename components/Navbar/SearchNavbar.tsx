import { useHandleSearch } from '@hooks/useHandleSearch';
import { IonIcon } from '@ionic/react';
import { searchOutline } from 'ionicons/icons';
const SearchNavbar = () => {
  const { setSearchTerm, handleKeyPress } = useHandleSearch();
  return (
    <div className='relative mr-10'>
      <IonIcon
        icon={searchOutline}
        className='absolute left-5 top-2.5 text-[#2A4496] w-5 h-5'
      />
      <input
        type='text'
        placeholder='Buscar'
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyUp={handleKeyPress}
        className='w-[175px] py-2 pl-12 rounded-full text-[#2A4496]  border-none focus:outline-none placeholder-[#2A4496] font-semibold bg-gray-100 '
      />
    </div>
  );
};

export default SearchNavbar;
