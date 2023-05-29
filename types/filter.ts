export type ViewMode = 'list' | 'grid';

export type FiltersSearch = {    
    property_type: '' | 'Departamento' | 'Casa' | 'Casa Quinta',
    price: number | null,
    covered_area: number | null,
    environments: number | null,
    bathrooms: number | null,
}

export interface ViewComponentState {
  propertyType: boolean;
  price: boolean;
  covered_area: boolean;
  bathrooms: boolean;
  bedrooms: boolean;
}

export interface Props {
  filters?: FiltersSearch;
  setFilters?: React.Dispatch<React.SetStateAction<FiltersSearch>>;
  view: ViewMode;
  setView: React.Dispatch<React.SetStateAction<ViewMode>>;
}