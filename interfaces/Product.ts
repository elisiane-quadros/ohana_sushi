import { StaticImageData } from 'next/image';
import { Ingredient } from './Ingredient';

export interface Product {
  id: number;
  title: string;
  image: StaticImageData;
  price: number;
  type: ProductType;
  ingredientList: Ingredient[];
}
