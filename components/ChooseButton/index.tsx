'use client';

import { v4 as uuidv4 } from 'uuid';

import { useAppSelector, useAppDispatch } from '@/hooks/redux';
import { Product } from '@/interfaces/Product';
import { CartItemList } from '@/interfaces/CartItemList';
import { ChangeEvent, useEffect, useState } from 'react';
import { CartInterface } from '@/interfaces/CartInterface';
import { setCart } from '@/store/features/cart';
import { Flex, Typography } from 'antd';
import Icon from '@mdi/react';
import { mdiMinusThick, mdiPlusThick } from '@mdi/js';
import RemoveItemModal from '../RemoveItemModal';
import ButtonSun from '../ButtonSun';

interface ChooseButtonProps {
  product: Product;
  activeAlert?: boolean;
}

const ChooseButton = ({ product, activeAlert = false }: ChooseButtonProps) => {
  const dispatch = useAppDispatch();
  const { Text } = Typography;
  const cart: CartInterface | null = useAppSelector((state) => state.cart.cart);

  const [quantityItem, setQuantityItem] = useState<number>(0);
  const [isRemoveItemModalOpen, setIsRemoveItemModalOpen] = useState(false);

  const handleSubtractItem = () => {
    if (activeAlert && quantityItem === 1) {
      setIsRemoveItemModalOpen(true);
      return;
    }
    if (quantityItem > 0 && cart) {
      setQuantityItem(quantityItem - 1);
      const newCartItem = cart.cartItemList
        .map((cil) => {
          if (cil.id === product.id) {
            return {
              ...cil,
              quantity: cil.quantity - 1,
            };
          }
          return cil;
        })
        .filter((item) => item.quantity > 0);

      const newCart: CartInterface = {
        id: cart.id,
        value: cart.value - product.price,
        cartItemList: newCartItem,
      };

      dispatch(setCart(newCart));
    }
  };

  const handleAddItem = () => {
    if (cart) {
      const item =
        cart.cartItemList.find((cil) => cil.id === product.id) || null;
      if (item) {
        setQuantityItem(quantityItem + 1);
        const newCartItem = cart.cartItemList.map((cil) => {
          if (cil.id === item.id) {
            return {
              ...cil,
              quantity: cil.quantity + 1,
            };
          }
          return cil;
        });

        const newCart: CartInterface = {
          id: cart.id,
          value: cart.value + product.price,
          cartItemList: newCartItem,
        };

        dispatch(setCart(newCart));
      } else {
        setQuantityItem(1);
        const newCartItemList: CartItemList[] = [
          ...cart.cartItemList,
          {
            id: product.id,
            product,
            quantity: 1,
          },
        ];

        const newCart: CartInterface = {
          id: cart.id,
          value: cart.value + product.price,
          cartItemList: newCartItemList,
        };

        dispatch(setCart(newCart));
      }
    } else {
      setQuantityItem(1);
      const newCartItemList: CartItemList = {
        id: product.id,
        product,
        quantity: 1,
      };

      const newCart: CartInterface = {
        id: uuidv4(),
        value: product.price,
        cartItemList: [newCartItemList],
      };

      dispatch(setCart(newCart));
    }
  };

  const handleInputItem = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value, 10);
    if (newValue >= 0) {
      setQuantityItem(newValue);
      if (cart) {
        const item =
          cart.cartItemList.find((cil) => cil.id === product.id) || null;
        if (item) {
          const newCartItem = cart.cartItemList.map((cil) => {
            if (cil.id === item.id) {
              return {
                ...cil,
                quantity: newValue,
              };
            }
            return cil;
          });

          let newCartFilteredItem = newCartItem;

          if (newValue === 0) {
            newCartFilteredItem = newCartItem.filter(
              (item) => item.quantity > 0,
            );
          }

          const newCart: CartInterface = {
            id: cart.id,
            value: cart.value + product.price,
            cartItemList: newCartFilteredItem,
          };

          dispatch(setCart(newCart));
        } else {
          const newCartItemList: CartItemList[] = [
            ...cart.cartItemList,
            {
              id: product.id,
              product,
              quantity: newValue,
            },
          ];

          const newCart: CartInterface = {
            id: cart.id,
            value: cart.value + product.price,
            cartItemList: newCartItemList,
          };

          dispatch(setCart(newCart));
        }
      } else {
        const newCartItemList: CartItemList = {
          id: product.id,
          product,
          quantity: newValue,
        };

        const newCart: CartInterface = {
          id: uuidv4(),
          value: product.price,
          cartItemList: [newCartItemList],
        };
        dispatch(setCart(newCart));
      }
    }
  };

  useEffect(() => {
    if (cart) {
      const newQuantityItem =
        cart.cartItemList.find((cartItem) => cartItem.id === product.id)
          ?.quantity || 0;
      setQuantityItem(newQuantityItem);
    }
  }, []);

  return (
    <Flex align="flex-end">
      {quantityItem > 0 && (
        <>
          <ButtonSun
            onClick={handleSubtractItem}
            icon={<Icon path={mdiMinusThick} size={0.7} color={'#FFF'} />}
          />
          {/* <SubtractButton onClick={handleSubtractItem}>
            <Icon path={mdiMinusThick} size={0.7} color={'#FFF'} />
          </SubtractButton> */}
          <Flex
            align="center"
            justify="center"
            style={{ width: '28px', height: '28px', margin: '0 4px' }}
          >
            <Text style={{ fontWeight: 600, fontSize: '1rem' }}>
              {quantityItem}
            </Text>
          </Flex>

          {/* <QuantityInput
            value={quantityItem}
            onChange={handleInputItem}
            style={{ color: '#333', fontWeight: 700, textAlign: 'center' }}
          /> */}
        </>
      )}
      <ButtonSun
        onClick={handleAddItem}
        icon={<Icon path={mdiPlusThick} size={0.7} color={'#FFF'} />}
      />
      {/* <AddButton
        type="primary"
        onClick={handleAddItem}
        $isInCart={quantityItem > 0}
      >
        <Icon path={mdiPlusThick} size={0.7} color={'#FFF'} />
      </AddButton> */}
      <RemoveItemModal
        item={cart?.cartItemList.find((cil) => cil.id === product.id) || null}
        isRemoveItemModalOpen={isRemoveItemModalOpen}
        onIsRemoveItemModalOpen={setIsRemoveItemModalOpen}
      />
    </Flex>
  );
};

export default ChooseButton;
