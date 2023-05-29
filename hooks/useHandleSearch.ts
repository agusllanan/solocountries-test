import { useRouter } from 'next/navigation';
import { useState } from 'react';

  export const useHandleSearch = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
    const handleSearch = (e: any) => {
    e.preventDefault();
    if (!searchTerm) return;
    router.push(`/search/query?query=${searchTerm}`);
    setSearchTerm('');
    }
    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch(event);
    }
  };


    return {searchTerm, setSearchTerm, handleKeyPress, handleSearch};
  }