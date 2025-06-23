import { Ingredient } from './Ingredient';

export interface Product {
  id: number;
  title: string;
  image: string; // StaticImageData;
  price: number;
  type: ProductType;
  order: number;
  ingredientList: Ingredient[];
}
