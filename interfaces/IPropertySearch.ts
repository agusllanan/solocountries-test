export interface ApiResponse {
    data: Property[];
}

export interface Property {
    id:               string;
    state:            State;
    property_type:    Type;
    operation_type:   Type;
    expiration_date:  string;
    address:          string;
    town:             string;
    province:         string;
    environments:     number;
    bedrooms:         number;
    bathrooms:        number;
    garages:          number;
    covered_area:     null;
    total_area:       number;
    antiquity:        null;
    property_price:   number;
    discount:         number;
    discount_price:   number;
    expenses:         null;
    coordinates_maps: null;
    title:            string;
    description:      string;
    video:            null;
    tour:             null;
    photos:           Photo[];
    active:           boolean;
    audit:            Audit;
}

export interface Audit {
    created_at: string;
    updated_at: string;
}

export interface Type {
    id:          string;
    description: string;
}

export interface Photo {
    id:   string;
    file: string;
}

export interface State {
    description: string;
}