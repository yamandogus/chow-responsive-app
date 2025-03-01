export interface Restaurant {
  id: number;
  name: string;
  image: string;
  rating: number;
  cuisine: string;
  deliveryTime: string;
  minOrder: number;
  tags: string[];
  address?: string;
  description?: string;
}

export interface CuisineType {
  value: string;
  label: string;
}

export interface SortOption {
  value: string;
  label: string;
}
