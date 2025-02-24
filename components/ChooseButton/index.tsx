'use client';

import { v4 as uuidv4 } from 'uuid';

import sun from '../../public/images/sun.png';

import { useAppSelector, useAppDispatch } from '@/hooks/redux';
import {
  AddButton,
  ChooseButtonContainer,
  ControllersContainer,
  InputBottomBorder,
  InputTopBorder,
  QuantityInput,
  SubtractButton,
} from './styles';
import Image from 'next/image';
import { Product } from '@/interfaces/Product';
import { CartItemList } from '@/interfaces/CartItemList';
import { ChangeEvent, useEffect, useState } from 'react';
import { CartInterface } from '@/interfaces/CartInterface';
import { setCart } from '@/store/features/cart';
import { Button, Flex } from 'antd';
import ButtonPrimary from '../ButtonPrimary';
import Icon from '@mdi/react';
import { mdiMinusThick, mdiPlusThick } from '@mdi/js';

interface ChooseButtonProps {
  product: Product;
  productIsInCart: boolean;
}

const ChooseButton = ({ product, productIsInCart }: ChooseButtonProps) => {
  const dispatch = useAppDispatch();
  const cart: CartInterface | null = useAppSelector((state) => state.cart.cart);

  const [quantityItem, setQuantityItem] = useState<number>(0);

  const handleSubtractItem = () => {
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
    <Flex>
      <SubtractButton onClick={handleSubtractItem}>
        <Icon path={mdiMinusThick} size={0.7} color={'#FFF'} />
      </SubtractButton>
      <QuantityInput value={quantityItem} onChange={handleInputItem} />
      <AddButton type="primary" onClick={handleAddItem}>
        <Icon path={mdiPlusThick} size={0.7} color={'#FFF'} />
      </AddButton>
    </Flex>
    // <ChooseButtonContainer>
    //   <InputTopBorder />
    //   <ControllersContainer>
    //     <SubtractButton onClick={handleSubtractItem}>
    //       <Image src={sun} width={28.91} height={32} alt="" />
    //       <span>-</span>
    //     </SubtractButton>
    //     <QuantityInput
    //       type="number"
    //       value={quantityItem}
    //       onChange={handleInputItem}
    //       style={{ background: `${productIsInCart ? '#d8161600' : ''}` }}
    //     />
    //     <AddButton onClick={handleAddItem}>
    //       <Image src={sun} width={28.91} height={32} alt="" />
    //       <span>+</span>
    //     </AddButton>
    //   </ControllersContainer>
    //   <InputBottomBorder />
    // </ChooseButtonContainer>
  );
};

export default ChooseButton;
