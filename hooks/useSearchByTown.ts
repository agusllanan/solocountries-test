import { useState, useEffect } from 'react';
import { Property, ApiResponse } from '../interfaces/IPropertySearch';


// Custom hook para buscar por town en los datos
export const useSearchByTown = (searchTerm: string) => {
  const [filteredData, setFilteredData] = useState<Property[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('URL_DEL_ENDPOINT'); // Esto va al llamado real de la api
        const data: ApiResponse = await response.json();
        const filteredData = data.data.filter(item =>
          item.town.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredData(filteredData);
      } catch (error) {
        // Manejo de errores
        console.log(error);
      }
    };

    fetchData();
  }, [searchTerm]);

  return filteredData;
};