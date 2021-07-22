type Product = {
  id: string;
  title: string;
  description: string;
  image: string;
  images: string[];
  options: string[];
  avgRating: number;
  ratings: number;
  price: number;
  oldPrice?: number;
};
export type {Product};
