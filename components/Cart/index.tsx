import { useEffect, useState } from 'react';
import Icon from '@mdi/react';
import { CartQuantityNumber } from './styles';
import { mdiCart, mdiCartOutline } from '@mdi/js';
import { CartInterface } from '@/interfaces/CartInterface';
import { Flex, Popover, Typography } from 'antd';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import sumTotalCartItems from '@/utils/sumTotalCartItems';
import PopoverContent from './components/PopoverContent';
import { setOpenCart } from '@/store/features/controls';

interface CartProps {
  isNavigating: boolean;
  setIsNavigating: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Cart = ({ isNavigating, setIsNavigating }: CartProps) => {
  const cart: CartInterface | null = useAppSelector((state) => state.cart.cart);
  const openCart: boolean = useAppSelector((state) => state.controls.openCart);
  const { Text } = Typography;
  const dispatch = useAppDispatch();
  const onOpenCart = (open: boolean) => {
    dispatch(setOpenCart(open));
  };

  const [totalCartItems, setTotalCartItems] = useState<number | null>(null);
  // const [openPopover, setOpenPopover] = useState(false);

  const sumTotal = () => {
    const newTotalCardItems = sumTotalCartItems(cart);
    setTotalCartItems(newTotalCardItems);
    if (newTotalCardItems === 0) {
      // setOpenPopover(false);
      onOpenCart(false);
      // dispatch(setOpenCart(false));
    }
  };

  useEffect(() => {
    sumTotal();
  }, [cart]);

  return (
    <Popover
      placement="bottomRight"
      title={
        cart && cart?.cartItemList && cart?.cartItemList.length ? (
          <Text
            style={{ fontSize: '1rem', padding: ' 0 12px', lineHeight: 2.25 }}
          >
            Carrinho
          </Text>
        ) : null
      }
      content={
        cart && cart?.cartItemList && cart?.cartItemList.length ? (
          <PopoverContent
            cart={cart}
            isNavigating={isNavigating}
            onIsNavigating={setIsNavigating}
            onOpenCart={onOpenCart}
          />
        ) : null
      }
      open={openCart}
      trigger="click"
      onOpenChange={(open) => {
        onOpenCart(open);
      }}
    >
      <Flex
        justify="flex-end"
        align="center"
        gap={12}
        style={{ height: '40px', position: 'relative' }}
      >
        {totalCartItems ? (
          <CartQuantityNumber>
            <span>{totalCartItems}</span>
          </CartQuantityNumber>
        ) : null}
        <Icon
          path={
            cart && cart?.cartItemList && cart?.cartItemList.length
              ? mdiCart
              : mdiCartOutline
          }
          size={1.5}
          style={{
            color: '#d81616',
            cursor: totalCartItems ? 'pointer' : 'default',
          }}
        />
      </Flex>
    </Popover>
  );
};

export default Cart;
