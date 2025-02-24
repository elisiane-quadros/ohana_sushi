'use client';

import CartForm from '@/components/CartForm';
import { useAppSelector } from '@/hooks/redux';
import { CartInterface } from '@/interfaces/CartInterface';
import { Flex, Result } from 'antd';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const CartArea = () => {
  const urlCartId = useParams().id;
  const cart: CartInterface | null = useAppSelector((state) => state.cart.cart);
  const [releaseCart, setReleaseCart] = useState(false);

  useEffect(() => {
    setReleaseCart(true);
    // if (cart && urlCartId === cart?.id) {
    //   setReleaseCart(true);
    // } else {
    //   setReleaseCart(false);
    // }
  }, [urlCartId]);

  return releaseCart ? (
    <Flex justify="center" style={{ width: '100%' }}>
      <Flex style={{ width: '100%', maxWidth: '1376px', margin: '24px 0' }}>
        <CartForm />
      </Flex>
    </Flex>
  ) : (
    <Flex
      justify="center"
      align="stretch"
      style={{
        width: '100%',
        padding: '32px 16px',
      }}
    >
      <Result
        status="error"
        title="Carrinho não encontrado"
        subTitle="Retorne a página de compras."
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          background: '#FFF',
          padding: '16px',
          width: '100%',
          maxWidth: '1376px',
          height: '400px',
          borderRadius: '4px',
          boxShadow: '4px 4px 20px #d8161630',
        }}
      />
    </Flex>
  );
};

export default CartArea;
