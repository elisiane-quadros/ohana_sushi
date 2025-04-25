import { CartInterface } from '@/interfaces/CartInterface';

const sumTotalCartItems = (cart: CartInterface | null) => {
  let newTotalCartItems: number = 0;

  if (cart && cart?.cartItemList) {
    cart?.cartItemList.map((item) => {
      newTotalCartItems += item.quantity;
    });
  }

  return newTotalCartItems;
};

export default sumTotalCartItems;
