import { CartItemList } from './CartItemList';

export interface CartInterface {
  id: string;
  value: number;
  cartItemList: CartItemList[];
}
