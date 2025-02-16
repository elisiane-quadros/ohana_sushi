import { Product } from './Product';

export interface CartItemList {
  id: number;
  product: Product;
  quantity: number;
}
